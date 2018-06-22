class CancerType < ApplicationRecord
	def to_meta_tags
    {
      title: name,
    }
    end
end