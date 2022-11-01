# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Admin.create(full_name:'Dennis Mwangi', password:'20400001296',password_confirmation:'20400001296')
p1 = User.create(image:Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg") ,username:'mike',telephone:'254799905192',password:'1234',password_confirmation:'1234',email:'mike@gmail.com')
p2 = User.create(image:Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg") ,username:'jeff',telephone:'254799905192',password:'1234',password_confirmation:'1234',email:'jeff@gmail.com')
p3 = User.create(image:Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg") ,username:'lucy',telephone:'254799905192',password:'1234',password_confirmation:'1234',email:'lucy@gmail.com')


t1=Technician.create({name: "Intro Ne", email: "mulirokemba@gmail.com", telephone: 0272, rating: 5, description: "very hardworking", "password": "gan", "password_confirmation": "gan"})
t2=Technician.create({name: "Int ", email: "muliro@ail.com", telephone: 02727563, rating: 4, description: "very hardworking", "password": "ga", "password_confirmation": "ga"})

t3=Technician.create({name: "I Nerd", email: "mulirokhaemba@gmail.c", telephone: 0272, rating: 5, description: "very hardworking", "password": "gant", "password_confirmation": "gant"})
t4=Technician.create({name: "In ", email: "muliro@gmail.com", telephone: 02727563, rating: 4, description: "very hardworking", "password": "gane", "password_confirmation": "gane"})



Vehicle.create({make: "BMW", plate_number: "KAV 097J", user_id: p1.id, price: 5000, vehicle_type: "Truck", speed: 900,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: t1.id, cleared:false })

Vehicle.create({make: "Audi", plate_number: "KDK 011A", user_id: p1.id, price: 5000, vehicle_type: "sport", speed: 900,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 5000, approved: false, cleared:false })

Vehicle.create({make: "Audi", plate_number: "KBJ 022F", user_id: p1.id, price: 5000, vehicle_type: "sport", speed: 900,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 0, approved: false, cleared:false })

Vehicle.create({make: "Toyota", plate_number: "KAV 073y", user_id: p2.id, price: 5000, vehicle_type: "SUV", speed: 600,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: t2.id, cleared:false })

Vehicle.create({make: "BMW", plate_number: "KAV 097", user_id: p3.id, price: 5000, vehicle_type: "Truck", speed: 900,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: t3.id, cleared:false })

Vehicle.create({make: "Toyota", plate_number: "KAV 07", user_id: p1.id, price: 5000, vehicle_type: "SUV", speed: 600,
image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ftruck.html&psig=AOvVaw2LEZZexIQT4Q9E03c2qh_I&ust=1666829061119000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKiuiaHM_PoCFQAAAAAdAAAAABAE",
billing: 3000, approved: false, technician_id: t4.id, cleared:false })

Part.create({name: "turbo", image: "https://images.unsplash.com/photo-1664695221759-21ed7295f697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHVyYm8lMjBlbmdpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
price: 30000, condition: "brand new", serial_number: 3456, model: "dodge demon", count: 9 })
Part.create({name: "supercharger", image: "https://images.unsplash.com/photo-1616273548176-4bef46c37596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBjaGFyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
price: 40000, condition: "brand new", serial_number: 34678, model: "Koenigsegg Jesko", count: 9 })

# Part.create({name: "turbo", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fturbocharger&psig=AOvVaw2K2OZTvu9zYc9dXQilwBPD&ust=1666829938357000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPCqqMPP_PoCFQAAAAAdAAAAABAE",
# price: 30000, condition: "brand new", serial_number: 3456, model: "dodge demon", count: 9 })
# Part.create({name: "supercharger", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fturbocharger&psig=AOvVaw2K2OZTvu9zYc9dXQilwBPD&ust=1666829938357000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPCqqMPP_PoCFQAAAAAdAAAAABAE",
# price: 40000, condition: "brand new", serial_number: 34678, model: "Koenigsegg Jesko", count: 9 })