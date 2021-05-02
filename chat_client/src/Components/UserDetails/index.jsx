import React from 'react';
import { Container, Content, UserImage, UserName } from './styles';
import avatarDefault from '../../Assets/avatar.png'

export default function UserDetails() {
    
    return (
        <Container>
            <Content>
                <UserImage src={avatarDefault}/>
                <UserName> Nome usuário</UserName>
            <label>Alterar Nome</label>
            </Content>
        </Container>
    )
}
