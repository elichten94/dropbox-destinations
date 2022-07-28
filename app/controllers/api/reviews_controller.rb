class Api::ReviewsController < ApplicationController 
  def show
    Review.where(:rec_id => params[:id]).to_json
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      show
    else
      render :json => "review save failed", status: :unprocessable_entity
    end

  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      show
    else
      render :json => "review update failed", status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
    def review_params
      params.require(:review).permit(:title, :body, :user_id, :rec_id, :rating, :photo)
    end
  end
end
  
