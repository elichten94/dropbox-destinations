class Api::RecommendationsController < ApplicationController
    def index 
        @city = params[:city] || ''
        @recommendations = Recommendation.where("lower(city) like ?", "%#{@city.downcase}%")
        render json: @recommendations
    end

    def show
        @recommendation = Recommendation.find(params[:id])
        @reviews = @recommendation.reviews
        render json: {'recommendation': @recommendation, "reviews": @reviews}
    end
end
