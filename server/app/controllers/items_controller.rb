class ItemsController < ApplicationController

    def update
        item = Item.find(params[:id])
        item.update(
            name: params[:name],
            color: params[:color],
            size: params[:size],
            stock: params[:stock],
            designer_id: params[:designer_id],
        )
        render json: item, status: :ok
    end

    def show

        item = Item.find(params[:id])
        render json: item
    end

    def create
        item = Item.create(params.permit)
        render json: item, status: :created
    end

    private
    def item_params
        params.permit(:name, :color, :size, :stock, :designer_id)
        
    end
end


