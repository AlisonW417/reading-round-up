class Book < ApplicationRecord
    belongs_to :user
    has_many :ratings
    has_many :users, through: :ratings

    validates :title, :author, presence: true
end
