class News < ApplicationRecord
	mount_uploader :thumbnail, ThumbnailUploader
end