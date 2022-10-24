







class VehiclesController < ApplicationController
    def create
        vehicle = Vehicle.create!(vehicle_params)
        session[:vehicle_id] = vehicle.id
        render json: vehicle, status: :created
    end

    private

    def vehicle_params
        params.permit(:make, :plate_number)
    end
end
