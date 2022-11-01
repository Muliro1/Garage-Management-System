

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email,:telephone
   has_many :vehicles
end
