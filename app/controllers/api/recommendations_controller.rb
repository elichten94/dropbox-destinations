class Api::RecommendationsController < ApplicationController
    def index 
        @recommendations = Recommendation.select_all("SELECT * FROM recommendations WHERE city like  '?' AND '?%'", params[:city])
        render: @recommendations
    end

    def show
        @recommendation = Recommendation.find(params[:id])
        render: @recommendation
    end
end