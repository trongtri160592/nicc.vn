class Course < ApplicationRecord
  has_many :trainee_courses
  has_many :trainees, through: :trainee_courses
end
