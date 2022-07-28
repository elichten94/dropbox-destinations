class FixcUserIdColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :recommendations, :user_id
    add_column :recommendations, :user_id, :integer, null: false 
    add_index :recommendations, :user_id
  end
end
