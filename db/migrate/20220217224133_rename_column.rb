class RenameColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column(:holdings, :coin_id, :coin_gecko_id)
    # change_column(:holdings, :coin_id, :string)
  end
end
