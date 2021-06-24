# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all
Rating.destroy_all

user1 = User.create(name: "Alison", username: "apw", password: "password")
user2 = User.create(name: "Chris", username: "cb", password: "pw")

book1 = Book.create(title: "Test Book", author: "Test Author", user_id: 1)

rating1 = Rating.create(rating: "4", user_id: 1, book_id: 1)
