class AdminSessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    #skip_before_action :authenticate_admin!, only: [:create, :destroy]
    def create
      admin = Admin.find_by(full_name: params[:full_name])
      if admin&.authenticate(params[:password])
        cookies[:admin_id] = admin.id
        render json: admin
      else
        render json: { errors: ["Invalid fullname or password"] }, status: :unauthorized
      end
    end

    
    def destroy
      session.delete :admin_id
      head :no_content
    end
end
