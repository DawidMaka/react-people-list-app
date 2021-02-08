import styled from 'styled-components'

const StyledMain = styled.main`
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 0 37px 0 rgba(225,230,255,0.54);
  margin: 50px auto 0;
  padding: 40px 0px 90px;
  width: 100%;

  h2 {
    background: linear-gradient(0deg, #7176F7 0%, #CA75F1 100%);
    border-radius: 7px;
    box-shadow: 0 7px 19px 0 rgba(125,118,246,0.31);
    color: #FFFFFF;
    display: inline-block;
    font-size: 25px;
    letter-spacing: 0.44px;
    line-height: 38px;
    margin: 21px 0 73px 0;
    padding: 21px 105px 24px;
    position: relative;

    &:after {
      border: 1px solid rgba(75, 89, 123, .3);
      content: '';
      display: block;
      height: 74px;
      width: 1px;
      position: absolute;
      left: 5%;
      top: 82px;
      transform: translateX(-50%);
    }
  }

  h4 {
    margin-bottom: 0;
    line-height: 1.5;
  }

  >
  button {
    margin: 20px auto;
  }

  @media(min-width: 576px) {
    padding: 40px 10px 90px;

    h2 {
      &:after {
        left: 15%;
      }
    }

    >
    button {
      margin-left: 9px;
    }
  }

  @media(min-width: 768px) {
    padding: 40px 60px 90px;
    width: 800px;

    h2 {
      &:after {
        left: 45px;
      }
    }
  }
`

export default StyledMain
