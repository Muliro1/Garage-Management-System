





class Technician < ApplicationRecord
    has_secure_password
    validates :name, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true


    belongs_to :admin, class_name: "Technician", optional: true
    has_one :vehicle
end
