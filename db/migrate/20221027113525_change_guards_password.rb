





class ChangeGuardsPassword < ActiveRecord::Migration[7.0]
  def up
    change_table :guards do |t|
      t.change :password, :string
    end
  end
end
