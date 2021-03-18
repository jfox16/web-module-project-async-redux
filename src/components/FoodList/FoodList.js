
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FoodListItem from './FoodListItem';

import { actions } from 'store/food';
const { fetchFood } = actions;



const FoodList = (props) => {

  const { foodImages, fetchFood, isLoading, error } = props;

  const [ imagesLoaded, setImagesLoaded ] = useState([]);
  const [ highestLoaded, setHighestLoaded ] = useState(-1);

  useEffect(() => {
    fetchFood();
  }, [ fetchFood ]);

  useEffect(() => {
    setImagesLoaded([]);
  }, [ foodImages ]);

  useEffect(() => {
    let newHighestLoaded = highestLoaded;
    for (let i = highestLoaded + 1; i < imagesLoaded.length; i++) {
      if (imagesLoaded[i]) {
        newHighestLoaded = i;
      }
      else {
        break;
      }
    }
    setHighestLoaded(newHighestLoaded);
  }, [ highestLoaded, imagesLoaded ]);

  const handleImageLoad = (i) => {
    const newImagesLoaded = [ ...imagesLoaded ];
    newImagesLoaded[i] = true;
    console.log(newImagesLoaded);
    setImagesLoaded(newImagesLoaded);
  }

  return (
    <StyledFullWidthContainer>
      <StyledFoodList>
        {!isLoading && !error &&
          foodImages?.map((foodImage, i) => (
            <FoodListItem
              src={foodImage}
              key={i}
              i={i}
              onLoad={() => handleImageLoad(i)}
              showImage={highestLoaded >= i}
            />
          ))
        }
      </StyledFoodList>
    </StyledFullWidthContainer>
  );
}



const StyledFullWidthContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

const StyledFoodList = styled.div`
  position: relative;
  left: -1px;
  width: calc(100% + 2px);
  display: flex;
  flex-wrap: wrap;
`;



const mapStateToProps = (state) => {
  return {
    foodImages: state.food.images,
    isLoading: state.food.isLoading,
    error: state.food.error
  }
}

export default connect(
  mapStateToProps,
  { fetchFood }
)(FoodList);