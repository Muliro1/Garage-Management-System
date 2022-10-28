class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true

    has_many :vehicles, dependent: :destroy
    belongs_to :admin, class_name: "User", optional: true
end
