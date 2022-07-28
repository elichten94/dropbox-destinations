class AddUserIdColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :recommendations, :user_id, :integer
  end
end
