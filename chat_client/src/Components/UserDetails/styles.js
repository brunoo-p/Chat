import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    transform: scale(1);
    transition: 0.3s ease-in;

    border-radius:  10px;
    justify-content: center;
    flex-direction: column;
    background: rgba(2,2,2,.5);


    label{
        display: flex;
        z-index: 2;
        font-size: 12px;
        font-weight: 700;
        background: grey;
    }


    :hover{
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 1px rgba(240,240,240, .4));
        
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
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