





class AddPasswordToGuard < ActiveRecord::Migration[7.0]
  def change
    add_column :guards, :password, :varchar
  end
end
