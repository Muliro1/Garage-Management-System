class TechnicianSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
  
    def create 
      technician = Technician.find_by(name: params[:name])
      if technician&.authenticate(params[:password])
        session[:technician_id] = technician.id
        render json: technician
      else
        render json: { errors: ["Invalid fullname or password"] }, status: :unauthorized
      end
    end

    
    def destroy
      session.delete :technician_id
      head :no_content
    end
end
