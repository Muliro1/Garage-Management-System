class Guard < ApplicationRecord
    has_secure_password

    validates :full_name, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
