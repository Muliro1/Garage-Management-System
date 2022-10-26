class AddDetailsToVehicles < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :price, :float
    add_column :vehicles, :type, :string
    add_column :vehicles, :speed, :integer
    add_column :vehicles, :image, :string
    add_column :vehicles, :billing, :integer
    add_column :vehicles, :approved, :boolean
  end
end
