require 'rails_helper'

RSpec.describe "Coins API Controller", type: :request do
  let!(:coins) { [btc, eth, doge] }
  let!(:btc) { Coin.create!(ticker: "btc") }
  let!(:doge) { Coin.create!(ticker: "doge") }
  let!(:eth) { Coin.create!(ticker: "eth") }
  let(:json) { JSON.parse(response.body) }
  let!(:user) do
    User.create(email: "foo@example.com", password: "piano123", password_confirmation: "piano123")
  end

  before do
    sign_in user
  end

  describe "GET /api/index (Index)" do
    before do
      get "/api/coins"
    end

    context "when there are no coins" do
      let!(:coins) { [] }

      it "returns a blank array" do
        expect(json).to eq []
      end
    end

    context "when there are coins from a different user" do
      let!(:coins) { [btc, eth, doge] }

      it "returns a blank array" do
        expect(json).to eq []
      end
    end

    context "when the current user has coins" do
      let!(:btc) { Coin.create(ticker: "btc", user: user) }
      let!(:coins) { [btc, eth, doge] }
      let!(:eth) { Coin.create(ticker: "eth", user: user) }

      it "returns a list of coins for our user" do
        expect(json.map { |coin| coin["ticker"] }.sort).to eq ["btc", "eth"]
      end
    end
  end

  describe "GET /api/coins/:id (Show)" do
    let!(:btc) { Coin.create!(ticker: "btc", user_id: user.id) }
    let(:coin_id) { 1 }

    before do
      get "/api/coins/#{coin_id}"
    end

    context "when invalid coin_id" do
      let(:coin_id) { "invalid" }

      it "returns one coin" do
        expect(json).to eq nil
      end
    end

    context "when valid coin_id" do
      let(:coin_id) { btc.id }

      it "returns one coin" do
        expect(json["ticker"]).to eq "btc"
      end
    end

    context "when valid ticker" do
      let(:coin_id) { "btc" }

      it "returns one coin" do
        expect(json["ticker"]).to eq "btc"
      end
    end
  end

  describe "POST /api/coins (Create)" do
    let(:my_btc) { Coin.find_by(ticker: "btc", user_id: user.id) }
    let(:params) { { coin: { ticker: "btc", quantity: 123 } } }

    before do
      post "/api/coins", params: params
    end

    context "when valid" do
      it "creates a new coin with the given quantity" do
        expect(my_btc.quantity).to eq 123
      end

      it "returns the quantity" do
        expect(json["quantity"]).to eq 123
      end

      it "returns the ticker" do
        expect(json["ticker"]).to eq "btc"
      end

      it "returns the user_id" do
        expect(json["user_id"]).to eq user.id.to_s
      end
    end
  end

  describe "PUT /api/coins/:id (Update)" do
    let(:coin_id) { btc.id }
    let(:params) { { coin: { quantity: quantity } } }
    let(:quantity) { nil }

    before do
      put "/api/coins/#{coin_id}", params: params
    end

    context "when valid quantity" do
      let(:quantity) { 123 }

      it "updates the coin quantity" do
        expect(btc.reload.quantity).to eq 123
      end

      it "returns the updated coin" do
        expect(json["quantity"]).to eq 123
      end
    end

    context "when nil quantity" do
      let(:quantity) { nil }

      it "updates the coin quantity" do
        expect(btc.reload.quantity).to eq nil
      end

      it "returns the updated coin" do
        expect(json["quantity"]).to eq nil
      end
    end

    context "when invalid" do
      let(:quantity) { "foobar" }

      it "updates the coin quantity" do
        expect(btc.reload.quantity).to eq 0.0
      end

      it "returns the updated coin" do
        expect(json["quantity"]).to eq 0.0
      end
    end
  end

  describe "DELETE /api/coins/:id (Destroy)" do
    let(:coin_id) { 1 }

    before do
      delete "/api/coins/#{coin_id}"
    end

    xit "deletes the coin"

    xit "returns an OK response"
  end
end
