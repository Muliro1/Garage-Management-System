class RemoveUserIdFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :user_id, :integer
  end
end
