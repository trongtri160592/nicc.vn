class Research < ApplicationRecord
  belongs_to :research_category
  def to_meta_tags
  {
    title: name,
  }
  end
end