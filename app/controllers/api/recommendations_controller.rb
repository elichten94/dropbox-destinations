class Api::RecommendationsController < ApplicationController
    def index 
        @recommendations = Recommendations.select_all("SELECT * FROM recommendations WHERE city like  '?' AND '?%'", params[:city])
        render: @recommendations


    end

    def show 
        @recommendation = User.find(params[:id])
        rebder @recommendation
    end
end