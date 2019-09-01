class CreateTraineeCourse < ActiveRecord::Migration[5.2]
  def change
    create_table :trainee_course do |t|
      t.references :trainee, foreign_key: true
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
