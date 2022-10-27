






class GuardSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
  
    def create
      guard = Guard.find_by(full_name: params[:full_name])
      if guard&.authenticate(params[:password])
        session[:guard_id] = guard.id
        render json: guard
      else
        render json: { errors: ["Invalid fullname or password"] }, status: :unauthorized
      end
    end

    
    def destroy
      session.delete :guard_id
      head :no_content
    end
end
