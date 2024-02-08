import React from 'react';
import ComingSoonModalWrapper from './styles/coming-soon-modal.style';

const ComingSoonModal = (props) => {
  const { closeModal } = props;
  return (
    <ComingSoonModalWrapper>
      <div className="modal-window">
        <div>
          <a onClick={closeModal} title="Close" className="modal-close">Close</a>
          <h1>Coming Soon: Enhancements Await!</h1>
          <div>Our team is cooking up something special just for you. Prepare for a wave of enhancements that will transform your user journey. Coming soon!</div>
        </div>
      </div>
    </ComingSoonModalWrapper>
  )
}

export default ComingSoonModal;