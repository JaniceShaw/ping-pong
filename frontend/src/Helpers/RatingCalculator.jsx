export const RatingCalculator = (reviews) => {
  let ratingTotal = 0;
  if (reviews) {
    reviews.map((review) => (ratingTotal += review.rating));
    let userRating = ratingTotal / reviews.length;
    return Math.round(userRating);
  }
};
