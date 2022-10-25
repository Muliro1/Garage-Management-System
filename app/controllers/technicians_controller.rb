






class TechniciansController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
  
    def create
      technician = Technician.create!(technician_params)
      #session[:technician_id] = technician.id
      render json: technician, status: :created
    end

    def index
        technicians = Technician.all
        render json: technicians
    end

    def show
      render json: @current_technician
    end

    def update
        technician = Technician.find_by(id: params[:id])
        if technician
          technician.update(technician_params)
          render json: technician
        else
          render json: { error: "Technician not found" }, status: :not_found
        end
    end

    def destroy
        technician = Technician.find_by(id: params[:id])
        if technician
          technician.destroy
          head :no_content
        else
          render json: { error: "technician not found" }, status: :not_found
        end
    end
  
    private
  
    def technician_params
      params.permit(:name, :email, :telephone, :rating, :description, :id)
    end
end
