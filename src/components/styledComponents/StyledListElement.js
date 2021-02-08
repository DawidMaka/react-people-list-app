import styled, { css } from 'styled-components'

const StyledListElement = styled.li`
  margin-bottom: 40px;
  padding: 0 0 0 15px;
  position: relative;

  &:after {
    background-color: rgba(75,89,123,.3);
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 15px;
    height: 2px;
    transform: translateY(-50%);
  }

  div {
    background-color: #FFFFFF;
    border-radius: 7px;
    box-shadow: 0 7px 23px 0 rgba(186, 184, 230, 0.31);
    font-family: 'Poppins', sans-serif;
    position: relative;    
    padding: 25px 6px 24px 12px;

    &::before {
      background: linear-gradient(0deg, #7176F7 0%, #CA75F1 100%);
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      box-shadow: 0 7px 19px 0 rgba(125,118,246,0.31);
      content: "";
      height: 100%;
      width: 6px;
      position: absolute;
      left: 0;
      top: 0;
    }  
  }

  p {
    border: 1px solid rgba(75, 89, 123, .3);
    border-radius: 4px;
    color: #4B597B;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.35px;
    line-height: 21px;
    margin: 0;
    padding: 10px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  @media(min-width: 576px) {
    padding: 0 0 0 35px;

    &:before {
      content: "And";
      color: #4B597B;
      font-family: inherit;
      font-size: 19px;
      letter-spacing: 0.35px;
      line-height: 30px;
      opacity: 0.4;
      position: absolute;
      top: 50%;
      left: -50px;
      transform: translateY(-50%);
    }

    &:after {     
      width: 35px;
    }

    div {
      padding: 25px 25px 24px 40px;

      &::before {        
        width: 12px;
      } 
    }

    p {
      font-size: 20px;
      line-height: 30px;
    }
  }

  ${({ subList }) => subList
    && css`          
      margin-bottom: 0;
      padding: 0px 0 0px 15px;
      margin: 20px 0;

      &::before {
        left: -51px;
      }

      &::after {
        width: 15px;
      }        
     
      div {
        box-shadow: none;
        padding: 0;   

        &:before {
          content: none;
        }
      }

      @media(min-width: 576px) {        
        padding: 0px 0 0px 26px;

        &::before {
          font-size: 19px;
          content: "Or";
          left: -37px;
        }

        &::after {
          width: 26px;
        }
      }
  `}
`

export default StyledListElement
