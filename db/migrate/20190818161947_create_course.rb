class CreateCourse < ActiveRecord::Migration[5.2]
  def change
    create_table :course do |t|
      t.string :name
      t.string :name_english
      t.text :description
      t.text :description_english

      t.timestamps
    end
  end
end
