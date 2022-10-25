





class Admin < ApplicationRecord
    has_secure_password
    validates :full_name, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true

    has_many :users

end
