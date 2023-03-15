class DesignersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable
    before_action :authorize

    def index
        user_data = Designer.all
        render json: user_data
    end

    def create
        designer = Designer.create!(designer_params)
        render json: designer, status: :created
    end

    def destroy
        designer = Designer.find(params[:id])
        designer.destroy
        head :no_content
    end

    private

    def designer_params
        params.permit(:name, :user_id, :id)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: "Designer not found..."}, status: :not_found
    end

    def authorize
        render json: {errors: "Request not authorized, please login"}, status: :unauthorized unless session.include? :user_id
    end

end
