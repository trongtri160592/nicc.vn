class WelcomeController < ApplicationController
  def index
    cancer_types_alphabetical = CancerType.order(:name)
                                     .group_by{ |cancer_type| cancer_type.name[0] }
    @available_letters = cancer_types_alphabetical.keys
    @featured_news = News.where(featured: 1).first(3)
	set_meta_tags title: 'Trang chủ'
    set_meta_tags site: 'Viện ung thư quốc gia'
    set_meta_tags description: 'Thông tin mới nhất về các loại ung thư và cách điều trị'
    set_meta_tags keywords: 'Bệnh viện, Ung thư, Quốc gia, Việt Nam'
  end
end
