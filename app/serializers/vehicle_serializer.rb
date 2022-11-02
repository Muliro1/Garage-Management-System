




class VehicleSerializer < ActiveModel::Serializer

  attributes :id, :make, :plate_number, :user_id,  :vehicle_type, :option, :image, :billing, :approved, :technician_id,:summary
end
