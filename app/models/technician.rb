





class Technician < ApplicationRecord
    has_secure_password


    belongs_to :admin, class_name: "Technician", optional: true
    has_one :vehicle
end
