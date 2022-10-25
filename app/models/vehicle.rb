





class Vehicle < ApplicationRecord
    belongs_to :user
    belongs_to :admin, class_name: "vehicle", optional: true
end
