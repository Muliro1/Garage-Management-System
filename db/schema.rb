# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_02_052848) do
  create_table "admins", force: :cascade do |t|
    t.string "full_name"
    t.string "password"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guards", force: :cascade do |t|
    t.string "full_name"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password"
  end

  create_table "parts", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.float "price"
    t.string "condition"
    t.integer "serial_number"
    t.string "model"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "count"
    t.integer "vehicle_id"
  end

  create_table "technicians", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "email"
    t.integer "telephone"
    t.integer "rating"
    t.integer "description"
    t.string "password"
    t.string "password_digest"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password"
    t.string "email"
    t.string "telephone"
    t.string "image"
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "make"
    t.string "plate_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "vehicle_type"
    t.string "image"
    t.integer "billing"
    t.boolean "approved"
    t.string "summary"
    t.boolean "cleared"
    t.integer "user_id"
    t.integer "technician_id"
    t.index ["technician_id"], name: "index_vehicles_on_technician_id"
    t.index ["user_id"], name: "index_vehicles_on_user_id"
  end

  add_foreign_key "vehicles", "technicians"
  add_foreign_key "vehicles", "users"
end
