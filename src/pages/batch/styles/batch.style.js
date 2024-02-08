
import styled from 'styled-components';

const BatchWrapper = styled.div`
// width : 100%;
// height : 100%;
.slot {
    height:100vh;
    width: 100vw;
    padding:20px;
    // background-color:green;
  }
  .selected{
    background-color: #e68e8e !important;
    border: none !important;
    color: #FFF;
  }
  .slot-image-content {
    width: 100%;
    height: 20vh;
    background: url('/images/pic1.jpg');
    background-size: cover;
    background-position: 50% 25%;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  p {
    width: 95%;
    margin-left: 10px;
    text-align: left;
    font-family: "Rubik", sans-serif;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
  .arrows {
    // text-align: left;
    margin: 10px;
    margin-left: 20px;
    margin-bottom: 30px;
  }
  .self{
    font-weight: bold;
  }
  .arrows a{
    color: darkblue;
  }
  .icon1 {
    color: darkgreen;
    margin-right: 10px;
    margin-left: 10px;
  }
  h2,
  h3 {
    text-align: left;
    font-size: 22px;
    margin: 4px;
  }
  .change-plan {
    display: flex;
    gap: 10px;
    margin: 5px;
    margin-bottom: 30px;
    a{
      color: salmon;
    }
  }
  .button-card {
    width: 100px;
    height: 50px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 0 gray;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
  }
  .booking{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  .button-card:hover {
    border: none;
    box-shadow: 0 1px 0 0 rgb(1, 46, 1);
    cursor: pointer;
  }
  .button-time {
    padding: 5px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
  }
  .button-time h3 {
    margin-top: 5px;
    margin-left: 15px;
    font-size: 13px;
    text-align: left;
  }
  .button-time span {
    margin-left: 5px;
    font-size: 13px;
    text-align: center;
  }
  .slot-button {
    max-width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap: 20px;
    // justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .time-card {
    height: 60px;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 0 gray;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
  }
  .time-card:hover {
    border: none;
    box-shadow: 0 1px 0 0 rgb(1, 46, 1);
    cursor: pointer;
  }
  .time-slot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:5px
  }
  .clock {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: 10px;
  }
  .icon2 {
    color: black;
    margin-right: 15px;
  }
  .week-days {
    margin-left: 20px;
  }
  .week-button{
    // display:flex;
    flex-direction:column;
    justify-content: space-between;
  }
  button {
    margin: 10px;
    background-color: salmon;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 8px 10px;
    cursor: pointer;
    width: 120px;
    margin-top: 25px;
  }
  button:hover {
    background-color: rgb(161, 166, 161);
  }
  
  /* Media Queries */
  
  @media screen and (max-width: 1024px) {
    .slot {
      height:100vh;
      width: 100vw;
      // gap:20px;
    }
    .slot-image-content {
      margin: 10px 0;
      height: 50%;
    }
    .slot-button {
      flex-wrap: wrap; 
      text-align: center;
      align-items: center;
      margin-bottom: 15px;
    }
    .booking{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      // gap:20px;
    }
    .week-button{
      display:flex;
      flex-direction:column;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 768px) {
    .slot {
      height:100vh;
      width: 100vw;
      // gap:20px;
    }
    .slot-image-content {
      margin: 10px 0;
      height: 15vh;
    }
    .slot-button {
      flex-wrap: wrap; 
      text-align: center;
      align-items: center;
      margin-bottom: 15px;
    }
    .booking{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      // gap:20px;
    }
    .week-button{
      display:flex;
      flex-direction:column;
      justify-content: space-between;
    }
  }

`;

export default (BatchWrapper);