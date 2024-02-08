
import styled from 'styled-components';

const AboutWrapper = styled.div`
width : 100%;
height : 100%;

.about-text-step {
    margin: 16px 0;
}
.about-text-sTitle {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    .about-details {
        display: flex;
        align-items: baseline;
    }
  
    .about-text-description {
        margin: 8px 24px;
        color: #4d4b4b;
        font-family: "Rubik", sans-serif;
        margin-left: 10px;
        text-align: left;
        line-height: 1.5rem;
    }
}

`;

export default (AboutWrapper);