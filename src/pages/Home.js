import { v4 as uuidv4 } from 'uuid'
import React, { useState, useMemo, useCallback } from 'react'
import initialState from 'base/constants'
import List from 'components/List'
import Modal from 'components/Modal'
import Button from 'components/Button'
import StyledTitle from 'components/styledComponents/StyledTitle'
import StyledMain from 'components/styledComponents/StyledMain'

const convertItems = (items, id) => items.reduce((result, originalItem) => {
  const item = { ...originalItem }

  if (item.parent !== id) {
    return result
  }

  const subItems = convertItems(items, item.id)

  if (subItems.length) {
    item.items = subItems
  }

  return [...result, item]
}, [])

const removeItem = (arr, id) => {
  const filtered = arr.filter((item) => item.id !== id)
  const children = arr.filter((item) => item.parent === id).map((item) => item.id)

  return children.reduce((items, child) => removeItem(items, child), filtered)
}

const addItem = (parent, text) => {
  const newItem = {
    id: uuidv4(),
    text,
    parent,
  }

  return newItem
}

const Home = () => {
  const [items, setItems] = useState(initialState)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [parent, setParent] = useState()

  const handleOpenModal = useCallback((value) => {
    const parent = value || '-1'
    setModalIsOpen(true)
    setParent(parent)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false)
  }, [])

  const handleAddItem = useCallback((parent, text) => setItems(
    (prevItems) => [...prevItems, addItem(parent, text)],
  ), [])

  const handleRemoveItem = useCallback((id) => setItems(
    (prevItems) => removeItem(prevItems, id),
  ), [])

  const convertedItems = useMemo(() => convertItems(items, '-1'), [items])

  return (
    <>
      <header>
        <StyledTitle>
          <div>
            H
            <span>Y</span>
          </div>
          <div>
            P
            <span>E</span>
          </div>
        </StyledTitle>
      </header>
      <StyledMain>
        <h2>People</h2>
        <List
          forms={convertedItems}
          handleOpenModal={handleOpenModal}
          handleRemoveItem={handleRemoveItem}
        />
        {modalIsOpen ? (
          <Modal
            parent={parent}
            handleAddItem={handleAddItem}
            handleCloseModal={handleCloseModal}
          />
        ) : null}
        <Button
          onClick={handleOpenModal}
          type="button"
          size="xlarge"
        >
          Add Field
        </Button>
      </StyledMain>
    </>
  )
}

export default Home
