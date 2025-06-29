class ApplicationController < ActionController::API
    include ActionController::Cookies
    include Pagy::Backend
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    before_action :authorize, except: [:index, :handle_options, :health]
  
    def index
      render json: { 
        message: "Welcome to Garage Management System API",
        version: "1.0.0",
        status: "running"
      }
    end

    def health
      render json: { 
        status: "healthy",
        timestamp: Time.current,
        cors: "enabled"
      }
    end

    def handle_options
      head :ok
    end
  
    private
  
    def authorize
      # Check for any valid session (user, admin, technician, or guard)
      @current_user = User.find_by(id: session[:user_id]) if session[:user_id]
      @current_admin = Admin.find_by(id: session[:admin_id]) if session[:admin_id]
      @current_technician = Technician.find_by(id: session[:technician_id]) if session[:technician_id]
      @current_guard = Guard.find_by(id: session[:guard_id]) if session[:guard_id]
  
      # If no valid session is found, return unauthorized
      unless @current_user || @current_admin || @current_technician || @current_guard
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end
