import styled, { css } from 'styled-components'

const StyledHorizontalLine = styled.span`
  background: white;
  height: 4px;
  width: 14px;

  ${({ size }) => size === 'xlarge'
    && css`
      height: 5px;
      width: 21px;
  `}
`

export default StyledHorizontalLine
