class RemoveSpeedFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :speed, :integer
  end
end
