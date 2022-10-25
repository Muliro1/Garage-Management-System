





class Technician < ApplicationRecord
    belongs_to :admin, class_name: "Technician", optional: true
end
