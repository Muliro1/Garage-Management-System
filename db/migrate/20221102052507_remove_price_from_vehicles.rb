class RemovePriceFromVehicles < ActiveRecord::Migration[7.0]
  def change
    remove_column :vehicles, :price, :float
  end
end
