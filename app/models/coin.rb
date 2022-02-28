class Coin < ApplicationRecord
    has_many :holdings
    has_many :transactions
    belongs_to :user, optional: true
end
