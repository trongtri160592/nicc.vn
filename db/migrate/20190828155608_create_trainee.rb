class CreateTrainee < ActiveRecord::Migration[5.2]
  def change
    create_table :trainee do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :job
      t.string :job_address

      t.timestamps
    end
  end
end
