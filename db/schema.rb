# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "cancer_type", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name_english", limit: 100, null: false
    t.string "name", limit: 100, null: false
    t.text "description_english"
    t.text "description"
    t.integer "is_common", limit: 1, default: 0, null: false
  end

  create_table "event", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 45
    t.text "content"
  end

  create_table "leadership", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "position", limit: 50
  end

  create_table "news", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 45
    t.text "content"
  end

  create_table "person", id: :integer, default: nil, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 45
    t.integer "leadership_id", null: false
    t.index ["leadership_id"], name: "fk_person_leadership_idx"
  end

  create_table "research", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 45
    t.text "description"
    t.integer "research_category_id", null: false
    t.date "release_date", null: false
    t.text "description_english"
    t.index ["research_category_id"], name: "fk_research_research_category1_idx"
  end

  create_table "research_category", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 45, null: false
    t.string "name_english", limit: 45, null: false
  end

  create_table "user", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "username", limit: 16, null: false
    t.string "email"
    t.string "password_digest", null: false
    t.timestamp "create_time", default: -> { "CURRENT_TIMESTAMP" }
  end

  add_foreign_key "person", "leadership", name: "fk_person_leadership"
  add_foreign_key "research", "research_category", name: "fk_research_research_category1"
end
