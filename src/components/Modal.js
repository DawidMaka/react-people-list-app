import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useDetectOutsideClick } from 'utils/useDetectOutsideClick'
import Button from 'components/Button'
import {
  StyledModalBackdrop,
  StyledModal,
  StyledModalDialog,
  StyledModalContentWrapper,
  StyledModalContent,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
} from 'components/styledComponents/StyledModal'

const Modal = ({ parent, handleAddItem, handleCloseModal }) => {
  const modalRef = useRef(null)
  useDetectOutsideClick(modalRef, handleCloseModal)

  return (
    <>
      <StyledModalBackdrop aria-hidden="true" />
      <StyledModal tabIndex="-1">
        <StyledModalDialog>
          <StyledModalContentWrapper ref={modalRef}>
            <StyledModalContent>
              <StyledModalHeader>
                <h3>New field</h3>
              </StyledModalHeader>
              <StyledModalBody>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const input = e.target.field
                  const { value } = input

                  if (value !== '') {
                    handleAddItem(parent, value)
                    handleCloseModal()
                  } else {
                    input.style.border = '2px solid red'
                  }
                }}
                >
                  <label
                    htmlFor="field"
                    className="sr-only"
                  >
                    New field
                  </label>
                  <input
                    autoComplete="off"
                    type="field"
                    className="form-control"
                    id="field"
                    name="newField"
                  />
                  <StyledModalFooter>
                    <Button
                      type="button"
                      removeBtn
                      onClick={handleCloseModal}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </StyledModalFooter>
                </form>
              </StyledModalBody>
            </StyledModalContent>
          </StyledModalContentWrapper>
        </StyledModalDialog>
      </StyledModal>
    </>
  )
}

export default Modal

Modal.propTypes = {
  parent: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func,
  handleCloseModal: PropTypes.func,
}
