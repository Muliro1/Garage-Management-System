class VehiclesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    def index
      @pagy, @vehicles = pagy(Vehicle.limit(10))
      render json: @vehicles
    end

    def show
      vehicle = Vehicle.find(params[:id])
      render json: vehicle, status: :ok
    end

    def create
        vehicle = Vehicle.create!(vehicle_params)
        render json: vehicle, status: :created
    end

    def destroy
        vehicle = Vehicle.find_by(id: params[:id])
          vehicle.destroy
          render json:{}
       
    end

    def update
        vehicle = Vehicle.find_by(id: params[:id])
        vehicle.update!(vehicle_params)
        render json: vehicle, status: :created
    end

    private

    def vehicle_params
        params.permit(:id,:technician_id, :user_id, :make, :plate_number, :cleared, :vehicle_type, :option, :image, :billing, :approved, :summary)
    end

    def render_not_found_response
      render json: {errors: "Vehicle not found"}, status: :not_found
    end
end
