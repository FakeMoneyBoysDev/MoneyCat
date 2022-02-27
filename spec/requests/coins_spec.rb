require 'rails_helper'

RSpec.describe "Coins API Controller", type: :request do
  let!(:user) do
    User.create(email: "foo@example.com", password: "piano123", password_confirmation: "piano123")
  end

  before do
    sign_in user
  end

  describe "GET /api/index (Index)" do
    let!(:coins) { [btc, eth, doge] }
    let!(:btc) { Coin.create(ticker: "btc") }
    let!(:doge) { Coin.create(ticker: "doge") }
    let!(:eth) { Coin.create(ticker: "eth") }
    let(:json) { JSON.parse(response.body) }

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
    let(:coin_id) { 1 }

    before do
      get "/api/coins/#{coin_id}"
    end

    xit "returns one coin"

    xit "returns the expected JSON format"

    xit "returns the coin for the given id"
  end

  describe "POST /api/coins (Create)" do
    let(:params) { {} }

    before do
      post "/api/coins", params
    end

    context "when valid" do
      let(:params) { {} }

      xit "creates a new coin"

      xit "returns the created coin"
    end

    context "when invalid" do
      let(:params) { { foo: "bar" } }

      xit "returns a 422 status"

      xit "returns an error message"
    end
  end

  describe "PUT /api/coins/:id (Update)" do
    let(:coin_id) { 1 }
    let(:params) { {} }

    before do
      put "/api/coins/#{coin_id}", params
    end

    context "when valid" do
      let(:params) { {} }

      xit "updates the new coin"

      xit "returns the updated coin"
    end

    context "when invalid" do
      let(:params) { { foo: "bar" } }

      xit "returns a 422 status"

      xit "returns an error message"
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
