






class AddPasswordToTechnicians < ActiveRecord::Migration[7.0]
  def change
    add_column :technicians, :password, :string
    add_column :technicians, :password_digest, :string
  end
end
