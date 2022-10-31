class VehicleSerializer < ActiveModel::Serializer
belongs_to :user
belongs_to :technician
  attributes :id, :make, :plate_number, :user_id,  :vehicle_type, :image, :billing, :approved, :technician_id, :service, :repair, :cleared
end
