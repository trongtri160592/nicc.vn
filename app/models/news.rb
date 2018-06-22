class News < ApplicationRecord
	mount_uploader :thumbnail, ThumbnailUploader
	def to_meta_tags
    {
      title: title,
    }
    end
end