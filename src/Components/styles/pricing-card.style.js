
import styled from 'styled-components';

const PricingWrapper = styled.div`
width : 100%;
height : 100%;
.subscription-card {
    height: 75px;
    margin: 15px 10px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 0 gray;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    .card-price {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        h3 {
            margin-left: 5px;
            font-size: 20px;
            text-align: left;
        }
        span {
            margin-left: 5px;
            font-size: 14px;
            color: #666;
            text-align: left;
        }
    }
    .new-price {
        color: rgb(34, 111, 227);
        font-size: 20px;
        margin-left: 5px;
    }
    
    .offer {
        display: flex;
        align-items: center;
    }
    .card-button {
        padding: 10px;
        /* text-align: center; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
        p {
            font-size: 14px;
            text-align: center;
            margin-bottom: -20px;
        }
        button {
            background-color: salmon;
            color: #fff;
            border: none;
            border-radius: 20px;
            padding: 5px;
            cursor: pointer;
            /* margin-top: 35px; */
            width: 90px;
        }
        button:hover {
            background-color: rgb(161, 166, 161);
        }
    }
}

`;

export default (PricingWrapper);