class AddTitleEnglishToResearches < ActiveRecord::Migration[5.2]
  def change
    add_column :research, :title_english, :string
  end
end
