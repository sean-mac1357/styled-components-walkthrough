import Styled from "styled-components";
import SubTitle from "./SubTitle";

const Wrapper = Styled.div`
  color: purple;
  background-color: silver;
  padding: 16px;
`;

const Banner = (props) => {
  const { message } = props;

  return (
    <Wrapper>
      <SubTitle>{message}</SubTitle>
    </Wrapper>
  );
};

export default Banner;
