class TechnicianSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :rating, :telephone
   has_many :vehicles
end