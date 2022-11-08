






class AddDetailsToParts < ActiveRecord::Migration[7.0]
  def change
    add_column :parts, :vehicle_id, :integer, foreign_key: true
  end
end
