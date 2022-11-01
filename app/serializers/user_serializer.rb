

class UserSerializer < ActiveModel::Serializer
  has_many :vehicles
  attributes :id, :username, :email, :password, :password_confirmation
end
