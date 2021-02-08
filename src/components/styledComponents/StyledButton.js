import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: ${({ removeBtn }) => (removeBtn ? 'linear-gradient(180deg, #F978A2 0%, #F1435B 100%)' : 'linear-gradient(0deg,#27E7E7 25%,#F4FF51 150%)')};
  border: none;
  border-radius: 100%;
  box-shadow: ${({ removeBtn }) => (removeBtn ? '0 6px 12px 0 #FFC0C9' : '0 12px 12px 0 rgba(61,234,214,0.3)')};
  cursor: pointer;
  height: 30px;
  min-width: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:focus {
    outline: none;
  }  

  ${({ size }) => size === 'large'
    && css`
      height: 40px;
      width: 40px;
  `}

  ${({ size }) => size === 'xlarge'
    && css`
      height: 71px;
      width: 71px;

      &:after {
        border-radius: 100%;
        box-shadow: 0 12px 12px 0 rgba(61,234,214,0.3);
        content: "";
        display: block;
        height: 96px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 96px;        
      }
  `}  
`

export default StyledButton
