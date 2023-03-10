# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Designer.create([{name: "Chanel"}, {name: "Céline"}, {name: "Jacquemus"}])
User.create([{username: "x", password: "x", password_confirmation: "x"}, {username: "y", password: "y", password_confirmation: "y"}, {username: "z", password: "z", password_confirmation: "z"}])
Item.create([{name: "Dress", color: "Red", size: "M", stock:100, user_id: 1 , designer_id: 1}, {name: "Boots", color: "Black", size: "7", stock:300, user_id: 2 , designer_id: 1}, {name:"Shoes", color:"Black", size:"7.5", stock:200, user_id:2, designer_id:2}, {name:"Sunglasses", color:"Black", size:"All", stock:300, user_id:3, designer_id:3}])

puts "SEEEEEEEEdddddding!"