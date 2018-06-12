# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Leadership.destroy_all
Leadership.create([
                            {position: 'Lãnh đạo tiền nhiệm', position_english: 'Former leaders'} ,
                            {position: 'Lãnh đạo đương nhiệm', position_english: ' Incumbent Leader'},
                            {position: 'Chuyên gia', position_english: 'Specialist'},
                            {position: 'Cán bộ kiêm nhiệm', position_english: 'Part-time staff'},
                            {position: 'Nghiên cứu viên', position_english: 'Researcher'}
                        ])
p "Created #{Leadership.count} positions"