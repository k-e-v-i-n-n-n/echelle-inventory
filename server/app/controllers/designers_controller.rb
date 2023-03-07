class DesignersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable
    

    def index
        user_data = Designer.all
        render json: user_data
    end

    def create
        designer = Designer.find_or_create_by!(designer_params)
        render json: designer, status: :created
    end

    private

    def designer_params
        params.permit(:name, :user_id)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: "Designer not found..."}, status: :not_found
    end

end
