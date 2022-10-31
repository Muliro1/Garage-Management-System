class RemoveTechnicianIdFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :technician_id, :integer
  end
end
