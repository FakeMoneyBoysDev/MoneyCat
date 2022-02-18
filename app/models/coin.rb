class Coin < ApplicationRecord
    has_many :holdings
    has_many :transactions
    has_many :users, through: :holdings
end
