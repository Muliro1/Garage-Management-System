class Vehicle < ApplicationRecord
    belongs_to :user, class_name: "Vehicle", optional: true
    belongs_to :admin, class_name: "Vehicle", optional: true
    # has_many :parts, dependent: :destroy
end
