import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating-2"
          className={`mask mask-star-2 ${
            index + 1 <= Math.floor(rating)
              ? 'bg-orange-400'
              : index + 0.5 < rating
              ? 'bg-orange-400 opacity-50'
              : ''
          }`}
          defaultChecked={index + 1 <= rating}
          readOnly
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
