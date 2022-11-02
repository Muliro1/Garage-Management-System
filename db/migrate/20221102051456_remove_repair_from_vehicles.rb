class RemoveRepairFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :repair, :boolean
  end
end
