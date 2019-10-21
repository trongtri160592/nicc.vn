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

ActiveRecord::Schema.define(version: 2019_10_06_132859) do

  create_table "banner", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "using", default: false
  end

  create_table "cancer_type", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name_english", limit: 500, null: false
    t.string "name", limit: 500, null: false
    t.text "description_english", limit: 4294967295
    t.text "description", limit: 4294967295
    t.integer "is_common", limit: 1, default: 0, null: false
    t.index ["name_english", "name"], name: "index2", type: :fulltext
  end

  create_table "course", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "name_english"
    t.text "description"
    t.text "description_english"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 45
    t.text "content"
  end

  create_table "image", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "introduction", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "responsibility"
    t.text "responsibility_en"
    t.text "summary"
    t.text "summary_en"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leadership", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "position", limit: 50
    t.string "position_english", limit: 50
  end

  create_table "news", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 500
    t.text "content", limit: 4294967295
    t.text "content_english", limit: 4294967295
    t.string "title_english"
    t.timestamp "created_at", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string "thumbnail", limit: 500
    t.integer "featured", limit: 1, default: 0
    t.index ["title", "title_english"], name: "index2", type: :fulltext
  end

  create_table "partner", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "logo", null: false
    t.string "website"
  end

  create_table "person", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 45
    t.integer "leadership_id", null: false
    t.string "portrait"
    t.text "background"
    t.text "background_english"
    t.index ["leadership_id"], name: "fk_person_leadership_idx"
  end

  create_table "research", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "title", limit: 500
    t.text "description"
    t.integer "research_category_id", null: false
    t.date "release_date"
    t.text "description_english"
    t.string "title_english"
    t.index ["research_category_id"], name: "fk_research_research_category1_idx"
    t.index ["title"], name: "index3", type: :fulltext
  end

  create_table "research_category", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "name", limit: 45, null: false
    t.string "name_english", limit: 45, null: false
  end

  create_table "trainee", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "job"
    t.string "job_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trainee_course", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "trainee_id"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_trainee_course_on_course_id"
    t.index ["trainee_id"], name: "index_trainee_course_on_trainee_id"
  end

  create_table "user", id: :integer, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci", force: :cascade do |t|
    t.string "username", limit: 16, null: false
    t.string "email"
    t.string "password_digest", null: false
    t.timestamp "create_time", default: -> { "CURRENT_TIMESTAMP" }
  end

  create_table "video", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "video"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "person", "leadership", name: "fk_person_leadership"
  add_foreign_key "research", "research_category", name: "fk_research_research_category1"
  add_foreign_key "trainee_course", "course"
  add_foreign_key "trainee_course", "trainee"
end
