





class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
    end

    private

    def admin_params
        params.permit(:full_name, :password, :password_confirmation, :id)
    end
end
