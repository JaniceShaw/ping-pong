export const RatingCalculator = (reviews) => {
  let ratingTotal = 0;
  reviews.map((review) => (ratingTotal += review.rating));
  let userRating = ratingTotal / reviews.length;

  return Math.round(userRating);
};
