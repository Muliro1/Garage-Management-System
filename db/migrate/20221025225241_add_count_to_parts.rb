







class AddCountToParts < ActiveRecord::Migration[7.0]
  def change
    add_column :parts, :count, :integer
  end
end
