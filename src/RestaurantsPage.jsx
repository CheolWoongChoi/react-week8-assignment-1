import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './slice';

import { PageBody, PageTop } from './style/layout';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <div>
      <PageTop>
        <h2>레스토랑 선택</h2>
      </PageTop>
      <PageBody>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </PageBody>
    </div>
  );
}