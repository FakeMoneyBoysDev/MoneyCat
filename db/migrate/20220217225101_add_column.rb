class AddColumn < ActiveRecord::Migration[6.1]
  def change
    add_column(:holdings, :coin_gecko_id, :string)
  end
end
