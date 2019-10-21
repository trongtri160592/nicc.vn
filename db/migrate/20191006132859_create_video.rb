class CreateVideo < ActiveRecord::Migration[5.2]
  def change
    create_table :video do |t|
      t.string :video

      t.timestamps
    end
  end
end
