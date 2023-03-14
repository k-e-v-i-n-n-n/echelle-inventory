class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable
    wrap_parameters format: []

    before_action :authorize

    def update
        item = find_item
        item.update!(item_params)
        render json: item
    end

    def show
        item = find_item
        render json: item
    end

    def create
        user = User.find_by(id: session[:user_id])
        item = user.items.create!(item_params)
        render json: item, status: :created
    end

    def destroy
        item = find_item
        item.destroy
        head :no_content
    end

    def delete_designer_items
        user = User.find(params[:id])
        designer_items_delete = user.items.destroy_by(designer_id: params[:designer_id])
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :color, :size, :stock, :designer_id)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: "Item not found..."}, status: :not_found
    end

    def authorize
        render json: {errors: "Request not authorized, please login..."}, status: :unauthorized unless session.include? :user_id
    end

    def find_item
        Item.find(params[:id])
    end
end

