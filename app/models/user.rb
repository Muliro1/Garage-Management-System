







class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: 

    belongs_to :admin
    has_many :vehicles
end
