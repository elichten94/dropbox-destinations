class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :body
      t.integer :user_id, null: false
      t.integer :rec_id, null: false
      t.integer :rating, null: false
      t.text :photo

      t.timestamps
    end
  end
end
