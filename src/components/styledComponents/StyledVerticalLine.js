import styled, { css } from 'styled-components'

const StyledVerticalLine = styled.span`
  background: white;
  height: 14px; 
  left: 13px;  
  position: absolute;
  top: 8px; 
  width: 4px;

  ${({ size }) => size === 'large'
    && css`
      left: 18px;
      top: 13px;  
  `}

  ${({ size }) => size === 'xlarge'
    && css`
      height: 21px;
      left: 33px;
      top: 25px;  
      width: 5px;
  `}
`

export default StyledVerticalLine
