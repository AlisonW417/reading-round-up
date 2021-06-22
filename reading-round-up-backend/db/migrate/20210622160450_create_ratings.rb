class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.string :rating
      t.integer :user_id
      t.integer :book_id
      
      t.timestamps
    end
  end
end
