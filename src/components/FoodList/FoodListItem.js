
import styled, { keyframes } from 'styled-components';

const FoodListItem = (props) => {

  const { src, onLoad, i, showImage } = props;

  if (showImage) {
    console.log('SHOWING ' + i + '!');
  }

  return (
    <StyledFoodImg
      style={showImage ? {} : {display: 'none'}}
      src={src}
      alt='food'
      onLoad={onLoad}
    />
  );
}

const fadeInAnimation = keyframes`
  0% { opacity: 0.0 }
  100% { opacity: 1.0 }
`;

const StyledFoodImg = styled.img`
  height: 250px;
  width: auto;
  flex-grow: 1;
  object-fit: cover;
  padding: 1px;

  animation: 1s ${fadeInAnimation};

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 400px) {
    height: 100px;
  }
`;

export default FoodListItem;