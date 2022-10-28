






class PartsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]
  
    def create
      part = Part.create!(part_params)
      render json: part, status: :created
    end

    def index
        parts = Part.all
        render json: parts
    end

    def show
      render json: @current_part
    end

    def update
      part = Part.find_by(id: params[:id])
      if part
        part.update(part_params)
        render json: part
      else
        render json: { error: "Part not found" }, status: :not_found
      end
  end

    def destroy
      part = Part.find_by(id: params[:id])
      if part
        part.destroy
        head :no_content
      else
        render json: { error: "Part not found" }, status: :not_found
      end
  end
  
    private
  
    def part_params
      params.permit(:name, :image, :price, :condition, :serial_number, :model, :id, :count)
    end
end
