import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/Button'
import StyledList from 'components/styledComponents/StyledList'
import StyledListElement from 'components/styledComponents/StyledListElement'

const List = React.memo((
  {
    forms, subList = false, handleOpenModal, handleRemoveItem,
  },
) => (
  <StyledList subList={subList}>
    {forms.map(({
      id, text, items,
    }) => (
      <StyledListElement
        key={id}
        id={id}
        text={text}
        subList={subList}
      >
        <div>
          <p>
            {text}
            <Button
              type="button"
              removeBtn
              id={id}
              onClick={handleRemoveItem}
            >
              Remove field
            </Button>
          </p>
          {items ? (
            <List
              forms={items}
              subList
              handleRemoveItem={handleRemoveItem}
            />
          ) : null}
          {!subList ? (
            <Button
              type="button"
              size="large"
              id={id}
              onClick={handleOpenModal}
            >
              Add Sub-Field
            </Button>
          ) : null}
        </div>
      </StyledListElement>
    ))}
  </StyledList>
))

export default List

List.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      parent: PropTypes.string.isRequired,
    })),
  })),
  subList: PropTypes.bool,
  handleOpenModal: PropTypes.func,
  handleRemoveItem: PropTypes.func,
}
