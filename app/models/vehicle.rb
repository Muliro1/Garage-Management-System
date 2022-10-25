





class Vehicle < ApplicationRecord
    belongs_to :user
    belongs_to :admin, class_name: "Vehicle", optional: true
end
