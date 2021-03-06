import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    max-width: 380px;
    height: 90%;
    overflow-y: auto;
    overflow-x: hidden;

    background: ${({theme}) => theme.backgruond};
    //border: 1px solid rgba(16,16,16,.3);
    border: none;
    border-radius: 5px;
    padding: 8px;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;

        background: ${({theme}) => theme.borderInput};
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
`;