




class VehicleSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :make, :plate_number, :user_id
end
