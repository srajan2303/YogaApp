
import styled from 'styled-components';

const ComingSoonModalWrapper = styled.div`
.modal-window {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    
    & > div {
      width: 450px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
      border-radius: 15px;
    }
    header {
      font-weight: 400;
    }
    h1 {
      font-size: 150%;
      margin: 0 0 15px;
    }
  }
  
    .modal-close {
        color: #aaa;
        line-height: 50px;
        font-size: 80%;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        width: 70px;
        text-decoration: none;
        &:hover {
        color: black;
        }
    }

    .modal-window div:not(:last-of-type) {
        margin-bottom: 15px;
    }
`;

export default (ComingSoonModalWrapper);