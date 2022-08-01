export const fetchCityRecommendations = (city_name) => {
  return $.ajax({
    method: "GET",
    url: `/api/recommendations/by_city/${city_name}`    
  })
}
