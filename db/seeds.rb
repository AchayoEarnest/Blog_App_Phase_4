# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding... "
Article.create(author: "Earnest", title: "The dead ocean", body: "This is part of the dangerous famous bermuda triangle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dolor ut ante tincidunt auctor et sit amet magna. Suspendisse potenti. Nam sodales nec sem at fringilla. Nullam molestie sem turpis, sed feugiat mi fermentum eu. Donec semper porta sollicitudin. Mauris aliquam lobortis lectus, ac gravida est tempus at. Praesent eget tortor ultricies, tincidunt elit id, malesuada tellus. Donec consequat, ligula tristique imperdiet semper, eros nisi fringilla diam, id finibus neque massa bibendum dui. Integer sem turpis, venenatis vitae justo id, viverra dapibus leo. Etiam imperdiet massa ut ex pretium, euismod tempor magna commodo. Quisque vehicula bibendum odio vitae dapibus. Cras ornare hendrerit lorem, vitae vulputate est vestibulum efficitur. Phasellus luctus lobortis felis, eget porttitor tortor. Nam consectetur est erat, nec varius libero lobortis ac. Integer tincidunt augue elit, ut gravida ante commodo vitae. Nunc ac bibendum urna. Morbi venenatis odio non tellus tristique feugiat. Aliquam consequat mollis justo et volutpat. Nulla sed libero commodo, aliquam odio eget, ullamcorper dui. In elementum lectus ac augue vehicula aliquet. Donec venenatis eu erat non faucibus. Sed interdum pulvinar magna sit amet laoreet.")
Article.create(author: "James", title: "The Haunted Doll", body: "However much we've tried to through the doll away. It keeps coming back to the house Quisque vehicula bibendum odio vitae dapibus. Cras ornare hendrerit lorem, vitae vulputate est vestibulum efficitur. Phasellus luctus lobortis felis, eget porttitor tortor. Nam consectetur est erat, nec varius libero lobortis ac. Integer tincidunt augue elit, ut gravida ante commodo vitae. Nunc ac bibendum urna. Morbi venenatis odio non tellus tristique feugiat. Aliquam consequat mollis justo et volutpat. Nulla sed libero commodo, aliquam odio eget, ullamcorper dui. In elementum lectus ac augue vehicula aliquet. Donec venenatis eu erat non faucibus. Sed interdum pulvinar magna sit amet laoreet.")
Article.create(author: "John Bosko", title: "The death of magicians ", body: "Since most illusions by the magicians have been identified as mere trick. People started killing them hence they arent available anymore Mauris aliquam lobortis lectus, ac gravida est tempus at. Praesent eget tortor ultricies, tincidunt elit id, malesuada tellus. Donec consequat, ligula tristique imperdiet semper, eros nisi fringilla diam, id finibus neque massa bibendum dui. Integer sem turpis, venenatis vitae justo id, viverra dapibus leo. Etiam imperdiet massa ut ex pretium, euismod tempor magna commodo. Quisque vehicula bibendum odio vitae dapibus. Cras ornare hendrerit lorem, vitae vulputate est vestibulum efficitur. ")

Comment.create(commentor: "James", body: "I love it", article_id: 1)
Comment.create(commentor: "Kennedy", body: "Awesome content", article_id: 2)
Comment.create(commentor: "John", body: "wonderful article", article_id: 2)
Comment.create(commentor: "Bosco", body: "So cool", article_id: 1)

puts "Done seeding"