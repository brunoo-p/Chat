import React from 'react';
import { Container, DotsSettings, SettingMenu, Content, UserImage, UserName } from './styles';
import avatarDefault from '../../Assets/avatar.png'

export default function UserDetails() {
    
    return (
        <Container>
            <Content>
                <UserImage src={avatarDefault}/>
                <UserName> Nome usuário</UserName>

                <DotsSettings/>
                <SettingMenu>
                    <ul>
                        <li>Adicionar Contato</li>
                        <li>Limpar Conversa</li>
                    </ul>
                </SettingMenu>
            
            </Content>
        </Container>
    )
}
