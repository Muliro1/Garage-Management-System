






class AddSummary < ActiveRecord::Migration[7.0]
  def change
    add_column :vehicles, :summary, :string
  end
end
