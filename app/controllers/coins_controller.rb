class CoinsController < ApplicationController
    def index 
        render json: Coin.all
    end
end
