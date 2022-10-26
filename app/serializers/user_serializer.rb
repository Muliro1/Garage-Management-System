






class UserSerializer < ActiveModel::Serializer
  has_many :vehicles
  attributes :id, :username
end
