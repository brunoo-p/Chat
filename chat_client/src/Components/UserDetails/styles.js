import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    transform: scale(1);
    transition: 0.3s ease-in;

    border-radius:  10px;
    color: #CCC;
    justify-content: center;
    flex-direction: column;
    background: rgba(2,2,2,.5);


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
    //z-index: 2;
    position: absolute;
    width: 100px;
    height: 120px;
    margin-bottom: -180px;
    align-items: center;

    color: rgb(6,6,6);
    font-size: 12px;
    font-weight: 700;
    padding: 10px;
    border-radius: 10px;

    background: rgba(34,200,122, 0.4);
    filter: drop-shadow(0px 0px 1px rgba(240,240,240, .4));

    li{
        display: flex;
        width: 110%;
        height: 20px;
        align-items: center;
        background: rgba(34,200,122, 0.5);
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
    display> flex;
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