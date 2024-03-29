class AddDetailsToTechnicians < ActiveRecord::Migration[7.0]
  def change
    add_column :technicians, :name, :string
    add_column :technicians, :email, :string
    add_column :technicians, :telephone, :integer
    add_column :technicians, :rating, :integer
    add_column :technicians, :description, :integer
  end
end
