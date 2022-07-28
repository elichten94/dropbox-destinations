# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
    {
        email: 'hisnameis@elliot.com',
        name: 'Elliot Lichtenberg',
        city: 'Chicago',
        state: 'Illinois',
        country: 'USA'
    },
    {
        email: 'michelle@michelle.com',
        name: 'Michelle Chen',
        city: 'Vancouver',
        state: 'British Columbia',
        country: 'Canada'
    }
])

recs = Recommendation.create([
    {
        rec_name: "Revan's Cafe",
        description: 'Not a cafe',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        rating: 5.0,
        user_id: 1
    },
    {
        rec_name: 'Brian Na School of Photography',
        description: 'The place to go to learn how to take pictures of your food',
        city: 'Los Angeles',
        state: 'California',
        country: 'USA',
        rating: 5.0,
        user_id: 2
    }
])

reviews = Review.create!([
    {
        title: 'I want to come back',
        body: 'I really want to come back',
        user_id: 1,
        rec_id: recs[0].id,
        rating: 5,
        photo: 'https://sayingimages.com/wp-content/uploads/i-cant-handle-life-meme.jpg'
    },
    {
        title: 'Rude customers',
        body: 'Oh wait I was that customer. 5 stars',
        user_id: 1,
        rec_id: recs[0].id,
        rating: 5,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPsHS2nCiB3qd3-t3nKrzj9iFYUlyGfzZ-g&usqp=CAU'
    }
])
