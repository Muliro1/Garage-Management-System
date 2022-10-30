






class ApplicationController < ActionController::API
    include ActionController::Cookies
    include Pagy::Backend
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
<<<<<<< HEAD
    # before_action :authorize
=======
    #before_action :authorize
>>>>>>> b117ad824cbf9526c4483711d56dd8f6feab4d7c
  
    private
  
    def authorize
      # @current_user = User.find_by(id: session[:user_id])

      # @current_admin = Admin.find_by(id: session[:admin_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end
