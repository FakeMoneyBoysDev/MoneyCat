class AddForeignKey < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :holdings, :users
    add_foreign_key :holdings, :coins
    add_foreign_key :transactions, :users
    add_foreign_key :transactions, :coins
  end
end
