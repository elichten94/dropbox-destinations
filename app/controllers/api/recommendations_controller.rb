class Api::RecommendationsController < ApplicationController
  def index 
    @recommendations = Recommendation.all
    render json: @recommendations
  end

  def show
    @recommendation = Recommendation.find(params[:id])
    @reviews = @recommendation.reviews
    render json: {'recommendation': @recommendation, "reviews": @reviews}
  end

  def by_city
    @city = params[:city]
    @recommendations = Recommendation.where("lower(city) like ?", "%#{@city.downcase}%")
    render json: @recommendations
  end
end
