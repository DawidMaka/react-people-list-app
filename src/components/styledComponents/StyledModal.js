import styled from 'styled-components'

const StyledModalBackdrop = styled.div`
  background-color: #000;
  height: 100vh;
  left: 0;
  opacity: .5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1040;
`

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
`

const StyledModalDialog = styled.div`
  height: 80%;
  max-width: 500px;
  margin: .5rem auto;
  position: relative;
  pointer-events: none;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledModalContentWrapper = styled.div`
  background: linear-gradient(0deg,#7176F7 0%,#CA75F1 100%);
  padding: 5px;
  width: 100%;
`

const StyledModalContent = styled.div`
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  position: relative;
  pointer-events: auto;  
  outline: 0;
`

const StyledModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
`

const StyledModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;

  input {
    height: 27px;
    width: 80%;
  }

  button {
    margin-right: 5px;
  }
`

const StyledModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: .75rem;
  border-bottom-right-radius: calc(.3rem - 1px);
  border-bottom-left-radius: calc(.3rem - 1px);
`

export {
  StyledModalBackdrop,
  StyledModal,
  StyledModalDialog,
  StyledModalContentWrapper,
  StyledModalContent,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
}
