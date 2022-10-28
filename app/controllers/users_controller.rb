








class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = User.create!(user_params)
      #if user.save
       # UserMailer.welcome_email(user).deliver_now
     # end
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def index
        @pagy, @users = pagy(User.limit(1))
        #@pagy, @records = pagy(Product.limit(10))
        render json: @users
    end

    def show
      render json: @current_user
    end

    def destroy
      user = User.find_by(id: params[:id])
      if user
        user.destroy
        head :no_content
      else
        render json: { error: "User not found" }, status: :not_found
      end
  end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :id)
    end
  
  end
