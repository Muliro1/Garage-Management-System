class GuardsController < ApplicationController
    skip_before_action :authorize, only: :create
    def create
        guard = Guard.create!(guard_params)
        session[:guard_id] = guard.id
        render json: guard, status: :created
    end

    def index
        guards = Guard.all
        render json: guards
    end

    def show
      render json: @current_guard
    end

    def update
        guard = Guard.find_by(id: params[:id])
        if guard
          guard.update(guard_params)
          render json: guard
        else
          render json: { error: "Guard not found" }, status: :not_found
        end
    end

    def destroy
        guard = Guard.find_by(id: params[:id])
        if guard
          guard.destroy
          head :no_content
        else
          render json: { error: "guard not found" }, status: :not_found
        end
    end


    private

    def guard_params
        params.permit(:full_name, :password, :password_confirmation, :id, :email)
    end
  
end
