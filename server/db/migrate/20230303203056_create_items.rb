class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :color
      t.integer :size
      t.integer :stock
      t.integer :user_id
      t.integer :designer_id

      t.timestamps
    end
  end
end
