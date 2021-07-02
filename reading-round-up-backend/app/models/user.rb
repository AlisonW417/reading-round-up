class User < ApplicationRecord
    has_secure_password
    has_many :books 
    has_many :ratings 
    has_many :rated_books, through: :ratings, source: :book

    validates :name, :username, presence: true
    validates :username, uniqueness: true 
end
