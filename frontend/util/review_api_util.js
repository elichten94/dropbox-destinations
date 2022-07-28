export const fetchReviews = () => {
    return $.ajax({
      method: "GET",
      url: "/api/reviews",
    })
  }
  
  export const fetchReview = (reviewId) => {
    return $.ajax({
      method: 'GET',
      url: `api/reviews/${reviewId}`
    });
  };
  
  export const createReview = review => (
    $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: { review }
    })
  );
  
  export const updateReview = (review) => {
    return $.ajax({
      method: 'PATCH',
      url: `api/reviews/${review.id}`,
      data: { review: review }
    })
  }
  
  export const deleteReview = (reviewId) => {
    return $.ajax({
      method: 'DELETE',
      url: `api/reviews/${reviewId}`
    })
  }