class DesignersController < ApplicationController

    def index

        user_data = Designer.all
        render json: user_data

    end
end
