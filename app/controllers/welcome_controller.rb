class WelcomeController < ApplicationController
  def index
    if I18n.locale == :en
      cancer_types_alphabetical = CancerType.where.not(name_english: [nil, '']).order(:name_english)
                                      .group_by {|cancer_type| cancer_type.name_english.strip[0].upcase}
      @available_letters = cancer_types_alphabetical.keys
    else
      cancer_types_alphabetical = CancerType.where.not(name: [nil, '']).order(:name)
                                      .group_by {|cancer_type| cancer_type.name.strip[0].upcase}
      @available_letters = cancer_types_alphabetical.keys
    end
    @featured_news = News.where(featured: 1).first(3)
    set_meta_tags title: 'Trang chủ'
    set_meta_tags site: 'Viện ung thư quốc gia'
    set_meta_tags description: 'Thông tin mới nhất về các loại ung thư và cách điều trị'
    set_meta_tags keywords: 'Bệnh viện, Ung thư, Quốc gia, Việt Nam'
  end
end
