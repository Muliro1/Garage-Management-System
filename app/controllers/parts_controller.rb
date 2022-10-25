






class PartsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]
  
    def create
      part = Part.create!(part_params)
      session[:part_id] = part.id
      render json: part, status: :created
    end

    def index
        parts = Part.all
        render json: parts
    end

    def show
      render json: @current_part
    end
  
    private
  
    def part_params
      params.permit(:name, :image, :price, :condition, :serial_number, :model, :id)
    end
end
