
import styled from 'styled-components';

const NavBarWrapper = styled.div`
width: 100%;
background-color: #dfdddb;
position: fixed;
nav{
    display: flex;
    justify-content: space-between;
    img{
        margin: 8px;
        cursor: pointer;
    }
    button{
        cursor: pointer;
        background-color: #e53d2a;
        border: solid 2px #e53d2a;
        color: white;    
        padding: 5px 5px;
        margin: auto 20px auto 0;
        border-radius: 6px;
    }
    .right-navbar{
        display: flex;
        .name{
            display: flex;
            align-items: center;
            margin-right: 35px;
            .display-menu-name{
                background: #e8e6ff;
                width: 40px;
                height: 40px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                font-size: 0.8rem;
                text-transform: uppercase;
                font-weight: 600;
                align-items: center;
                justify-content: center;
                margin-right: 8px;
            }
        }
        @media screen and (max-width: 768px) {
            .name{
                display: none;
            }
        }
    }
}
`;

export default (NavBarWrapper);