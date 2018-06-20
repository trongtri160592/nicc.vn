class WelcomeController < ApplicationController
  def index
    cancer_types_alphabetical = CancerType.order(:name)
                                     .group_by{ |cancer_type| cancer_type.name[0] }
    @available_letters = cancer_types_alphabetical.keys
    @featured_news = News.where(featured: 1).first(3)
  end
end
