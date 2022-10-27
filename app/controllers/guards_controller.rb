





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

    private

    def guard_params
        params.permit(:full_name, :password, :password_confirmation, :id, :email)
    end
  
end
