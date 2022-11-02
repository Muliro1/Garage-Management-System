class AddOptionToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :option, :string
  end
end
