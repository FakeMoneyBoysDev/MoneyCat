class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins do |t|
      t.string :coin_gecko_id
      t.string :name
      t.string :ticker
      t.text :logo
      t.float :price
      t.float :price_change_24h
      t.float :price_change_percentage_24h

      t.timestamps
    end
  end
end
