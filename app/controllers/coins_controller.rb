class CoinsController < ApplicationController
  def index
    render json: Coin.where(user_id: current_user.id)
  end

  def show
    coin = Coin.find_by(id: params[:id], user_id: current_user.id) ||
      Coin.find_by(ticker: params[:id], user_id: current_user.id)

    render json: coin
  end

  def create
    coin = Coin.create(coin_params.merge(user_id: current_user.id))
    if coin.valid?
      render json: coin
    else
      render json: coin.error, status: 422
    end
  end

  def update
    coin = Coin.find(params[:id])
    coin.update(coin_params)
    if coin.valid?
      render json: coin
    else
      render json: coin.error
    end
  end

  def destroy
    coin = Coin.find(params[:id])
    coin.destroy
    if coin.valid?
      render json: coin
    else
      render json: coin.error, status: 422
    end
  end

  private

  def coin_params
    params
      .require(:coin)
      .permit(:quantity, :ticker)
  end
end
