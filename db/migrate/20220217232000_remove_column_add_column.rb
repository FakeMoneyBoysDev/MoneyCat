class RemoveColumnAddColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column(:holdings, :coin_gecko_id)
    remove_column(:transactions, :coin_gecko_id)
    add_column(:holdings, :coin_id, :integer)
    add_column(:transactions, :coin_id, :integer)
  end
end
