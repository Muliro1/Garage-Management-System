# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Vehicle.create({make: "BMW", plate_number: "KAV 097J", user_id: 3, price: 5000, vehicle_type: "Truck", speed: 900,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: 1 })

Vehicle.create({make: "Toyota", plate_number: "KAV 073y", user_id: 1, price: 5000, vehicle_type: "SUV", speed: 600,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: 2 })

Technician.create(name: "Intro Nerd", email: "mulirokhaemba@gmail.com", telephone: 0272, rating: 5, description: "very hardworking")
Technician.create(name: "Intro ", email: "muliro@gmail.com", telephone: 02727563, rating: 4, description: "very hardworking")

Part.create({name: "turbo", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fturbocharger&psig=AOvVaw2K2OZTvu9zYc9dXQilwBPD&ust=1666829938357000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPCqqMPP_PoCFQAAAAAdAAAAABAE",
price: 30000, condition: "brand new", serial_number: 3456, model: "dodge demon", count: 9 })
Part.create({name: "supercharger", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fturbocharger&psig=AOvVaw2K2OZTvu9zYc9dXQilwBPD&ust=1666829938357000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPCqqMPP_PoCFQAAAAAdAAAAABAE",
price: 40000, condition: "brand new", serial_number: 34678, model: "Koenigsegg Jesko", count: 9 })