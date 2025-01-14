import { useEffect, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../slice';

import { get } from '../utils';

function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(sendReview({ restaurantId }));
  };

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          fields={reviewFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}

export default memo(RestaurantContainer);
