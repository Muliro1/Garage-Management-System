class AddClearedToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :cleared, :boolean
  end
end
