import styled from 'styled-components';

const LoginWrapper = styled.div`
width : 100%;
height : 100%;
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    .heading{
        margin-left:10px;
    }
    h2{
        font-size:40px;
        text-align:left;
        padding-bottom:10px;
        color:teal;
    }
    .phone-input{
        width: max-content;
        align-items:left;
        margin: 30px auto;
        input{
            background: inherit;
            height:4em;
        }
        .flag-dropdown {
            background: inherit;
        }
        .otp-input{
            width: 3em;
            text-align: center;
            height: 4em;
        }
        .otp-seprator{
            margin: 10px;
        }
    }
    a{
        color:salmon;
    }
    p{
        font-size:10px;
        text-align:left;
    }
    input[type="checkbox"] {
        accent-color: salmon;
      }
    .agreement-box{
        display: flex;
        align-items: center;
        margin: 20px auto;
        justify-content: center;
        input{
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .button-container{
        // margin-left:5px;
        button{
            width: 150px;
            font-size: 18px;
            font-weight: 500;
            border-radius: 6px;
            border: solid 2px #e57d2c;
            background-color: #e57d2c;
            color: #FFF;
            padding: 0.5rem 0 0.5rem 0;
            display: inline-block;
            text-align: center;

            &:hover {
                cursor: pointer;
            }

            &:focus {
                outline: none;
            }
        }
    }
    @media screen and (max-width: 700px){
        .login-box{
            display:flex;
            flex-direction:column;
            align-items:center;
            // text-align:center;
        }
        .heading{
            margin-left:-105px;
            text-align: left;
            width: 50%;
        }
        h2{
            font-size: 26px;
            width: max-content;
        }
  }

`;

export default (LoginWrapper);