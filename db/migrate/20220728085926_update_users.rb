class UpdateUsers < ActiveRecord::Migration[6.1]
    add_column :users, :name, :string, null: false
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :country, :string
end
