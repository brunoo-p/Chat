import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    transform: scale(1);
    transition: 0.3s ease-in;
    font-family: Roboto, sans serif;

    border-radius:  10px;
    color: #CCC;
    justify-content: center;
    flex-direction: column;
    background: rgba(2,2,2,.5);

    article{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        margin-top: 50px;
        background: red;
    }

    .contactName{
        padding: 5px;
        width: 200px;
        text-align: center;
        font-size: 14px;
        font-weight: 900;

        background: none;
        border: none;
        border-radius: 5px;
        border-bottom: 2px solid rgba(64, 115, 158, .3);
        
        transition: 0.3s ease-in;
        transform: translateY(-25px);

        :focus{
            outline: none;
            background: rgba(34,200,122, 0.2);
            border-bottom: 2px solid white;
        }
    }

    :hover{
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 1px rgba(240,240,240, .4));
        
    }
`;

export const Content = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: absolute;
    
`;

export const DotsSettings = styled(BiDotsVerticalRounded)`
    display: flex;
    width: 8%;
    height: 10%;
    justify-content: flex-end;
    
    padding: 1px;
    border-radius: 7px;
    cursor: pointer;
    
    :hover{
        background: linear-gradient(0.45turn, rgba(64, 115, 158, .3), rgba(253, 150, 68, .3));
    }
`;

export const SettingMenu = styled.div`
    display: flex;
    position: absolute;
    width: 100px;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: -2;

    transform: translateY(-100%);
    transition: 0.5s ease-out;

    color: rgb(6,6,6);
    font-size: 12px;
    font-weight: 700;
    padding: 10px;
    border-radius: 10px;

    background: rgba(34,200,122, 0.4);
    filter: drop-shadow(0px 0px 1px rgba(240,240,240, .4));

    &.open{
        opacity: 1;
        z-index: 0;  
        transform: translateY(0);
        transition: 0.5s ease-out;
    }

    li{
        display: flex;
        width: 110%;
        height: 20px;
        align-items: center;
        padding: 4px;
        margin-top: 2px;
        margin-left: -8px;
        list-style: none;
        text-decoration-line: underline overline;
        text-decoration-color: rgba(245,245,240, 0.8);
        
        cursor: pointer;

        :hover{
            background: rgba(34,200,122, 0.2);
            text-decoration-color:rgba(64, 115, 158, .5); 
        }
    }
`;

export const UserImage = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    cursor: pointer;
    
    border-radius: 50%;
    background-color: white;
    
    background-image: url(${(prop) => prop.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
`;

export const UserName = styled.span`
    display: flex;
    margin-left: 30px;
    font-familly: Roboto, sans serif;
    font-size: 20px;
    font-weight: 700;

`;