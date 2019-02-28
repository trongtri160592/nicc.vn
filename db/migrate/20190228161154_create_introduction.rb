class CreateIntroduction < ActiveRecord::Migration[5.2]
  def change
    create_table :introduction do |t|
      t.text :responsibility
      t.text :responsibility_en
      t.text :summary
      t.text :summary_en

      t.timestamps
    end
  end
end
