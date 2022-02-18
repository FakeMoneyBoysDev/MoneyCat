class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.string :coin_gecko_id
      t.float :quantity_traded
      t.boolean :buy
      t.boolean :sell
      t.float :price


      t.timestamps
    end
  end
end
