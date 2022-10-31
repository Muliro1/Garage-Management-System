class Vehicle < ApplicationRecord
    belongs_to :user
    belongs_to :technician, optional: true
    # has_many :parts, dependent: :destroy
end
