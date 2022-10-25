





class CreateParts < ActiveRecord::Migration[7.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :condition
      t.integer :serial_number
      t.string :model

      t.timestamps
    end
  end
end
