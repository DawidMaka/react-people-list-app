import PropTypes from 'prop-types'
import React from 'react'
import StyledButton from 'components/styledComponents/StyledButton'
import StyledVerticalLine from 'components/styledComponents/StyledVerticalLine'
import StyledHorizontalLine from 'components/styledComponents/StyledHorizontalLine'

const Button = React.memo(({
  id, type, size, removeBtn, onClick, children, ...props
}) => {
  const handleClick = () => {
    if (id) {
      onClick(id)
    } else {
      onClick()
    }
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick ? handleClick : null}
      size={size}
      removeBtn={removeBtn}
      {...props}
    >
      <span className="sr-only">
        {children}
      </span>
      {removeBtn ? (
        <StyledHorizontalLine />
      ) : (
        <>
          <StyledHorizontalLine size={size} />
          <StyledVerticalLine size={size} />
        </>
      )}
    </StyledButton>
  )
})

export default Button

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  removeBtn: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
}
