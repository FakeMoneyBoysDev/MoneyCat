class CoinsController < ApplicationController
    def index 
        render json: Coin.all
    end

  def create 
    coin = Coin.create(coin_params)
    if coin.valid?
        render json: coin
    else 
        render json: coin.error, status: 422
    end
    
  end

#    def update 
#     coin = current_user.coins.update(coin_params)
#     render json: coins
#   end

private
  def coin_params
    params.require(:coins).permit(:name, :ticker, :logo, :price, :price_change_24h, :user_id, :price_change_percentage_24h)

  end
end
