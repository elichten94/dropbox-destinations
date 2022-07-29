@recommendation.each do |review|
  json.set! review.id do
    json.partial! 'api/recommendations/recommendation', recommendation: recommendation
  end
end