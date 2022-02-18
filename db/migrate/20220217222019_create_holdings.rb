class CreateHoldings < ActiveRecord::Migration[6.1]
  def change
    create_table :holdings do |t|
      t.integer :user_id
      t.string :coin_gecko_id
      t.float :quantity

      t.timestamps
    end
  end
end
