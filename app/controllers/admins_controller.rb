class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        admin = Admin.create!(admin_params)
        cookies[:admin_id] = admin.id
        byebug
        render json: admin, status: :created
    end

    def show
        admin = Admin.find_by(id: cookies[:admin_id])
        if admin
            render json: admin, status: :ok
        else
            render json:{errors:"Not Authorized"}, status: :unauthorized
        end
    def index
        admins = Admin.all
        render json: admins
    end

    private

    def admin_params
        params.permit(:full_name, :password, :password_confirmation, :id)
    end
end
