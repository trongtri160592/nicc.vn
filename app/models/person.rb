class Person < ApplicationRecord
  mount_uploader :portrait, PortraitUploader
  belongs_to :leadership
end