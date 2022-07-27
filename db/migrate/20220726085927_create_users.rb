class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null:false
      t.string :city
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
