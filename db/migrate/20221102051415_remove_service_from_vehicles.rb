class RemoveServiceFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :service, :boolean
  end
end
