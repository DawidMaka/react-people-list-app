import styled, { css } from 'styled-components'

const StyledList = styled.ul`
  border-bottom: 2px solid rgba(75,89,123,.3);
  border-left: 2px solid rgba(75,89,123,.3);
  list-style: none;
  margin: 0 0 0 14px;
  padding: 1px 0;
  
  p + button {
    margin: 30px 0px 0px 0px;

    &::before {
      background-color: rgba(75,89,123,.3);
      content: "";
      height: 31px;
      left: 19px;
      position: absolute;
      top: -15px;
      transform: translateY(-50%);
      width: 2px;
    }
  }
  
  @media(min-width: 576px) {
    border-bottom: none;
    margin: 0 0 0 44px;
  }

  ${({ subList }) => subList
    && css`
      border-bottom: none;
      margin: 0 0 0 19px;
      width: auto;

      @media(min-width: 576px) {
        margin: 0 0 0 20px;
      }
  `}
`

export default StyledList
