# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ResearchCategory.destroy_all
ResearchCategory.create([
                            {name: 'Đề tài NCKH cấp cơ sở', name_english: 'institutional Scientific Research'} ,
                            {name: 'Đề tài NCKH cấp bộ', name_english: 'Ministerial Scientific Research'},
                            {name: 'Sách đã xuất bản', name_english: 'Released books'},
                            {name: 'Đề tài NCKH cấp nhà nước', name_english: 'Governmental Scientific Research'},
                            {name: 'Nghiên cứu trong nước', name_english: 'Domestic Research'},
                            {name: 'Nghiên cứu quốc tế', name_english: 'International Research'},
                            {name: 'Thử nghiệm lâm sàng', name_english: 'Clinical trial'},
                            {name: 'Đào tạo', name_english: 'Training'},
                        ])
p "Created #{ResearchCategory.count} categories"