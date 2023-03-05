class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :color
      t.string :size
      t.string :stock
      t.integer :user_id
      t.integer :designer_id

      t.timestamps
    end
  end
end
