
import styled from 'styled-components';

const InfoCardWrapper = styled.div`
/* Cards */

.info-cards {
  // height: auto;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 25px;
  padding-bottom: 25px;
  width: 250px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
}

.info-card-description {
  text-align:center;
  margin: 24px 0;
  color: black;
  font-family: "Rubik", sans-serif;
  font-size: 15px;
  line-height: 1.7rem;
}
.info-icon{
  text-align: center;
  margin-bottom: 20px;
}
.info-card-icon {
  padding: 30px;
  border-radius: 50%;
  background-color: lightgray;
  display: inline-block;
  border-radius: 50px;
  padding: 1em 1em;
}
.info-fa-icon {
  color: #2c96ff;
  height:2.5rem;
 
}

.card-btn {
  margin: 0px 20px;
  padding: 10px;
  border-radius: 50px;
  outline: transparent;
  background-color: salmon;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s ease;
  border: none;
  color: white;
}
.card-btn:hover {
  border: none;
}
a {
  color: rgb(158, 83, 83);
  text-align:center;
}
a:hover {
  color: black;
}

@media screen and (max-width: 700px) {
    .info-cards {
        padding-top: 25px;
        padding-bottom: 2px;
      }
}
@media screen and (max-width: 1000px) {
    .card-btn {
      font-size: 15px;
      padding: 5px;
    }
}
`;

export default (InfoCardWrapper);