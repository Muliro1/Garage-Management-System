





class CreateGuards < ActiveRecord::Migration[7.0]
  def change
    create_table :guards do |t|
      t.string :full_name
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
