class Trainee < ApplicationRecord
  validates :name, :email, :phone, presence: true
  has_many :trainee_courses
  has_many :courses, through: :trainee_courses
end
