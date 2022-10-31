





class AddColumnsToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :service, :boolean
    add_column :vehicles, :repair, :boolean
  end
end
