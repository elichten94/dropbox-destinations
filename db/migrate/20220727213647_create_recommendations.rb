class CreateRecommendations < ActiveRecord::Migration[6.1]
  def change
    create_table :recommendations do |t|
      t.string :rec_name, null: false 
      t.text :description, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      t.float :rating, null: false

      t.timestamps
    end
  end
end
