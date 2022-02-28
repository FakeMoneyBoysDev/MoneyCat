class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :coins, :quantity, :float
  end
end
