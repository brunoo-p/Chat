import React, { useState } from 'react';
import { Container, DotsSettings, SettingMenu, Content, UserImage, UserName } from './styles';
import avatarDefault from '../../Assets/avatar.png'

export default function UserDetails() {
    
    const [ showMenu, setShowMenu ] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <Container>
            <Content>
                <UserImage src={avatarDefault}/>
                <UserName> Nome usuário</UserName>

                <DotsSettings onClick={handleMenu}/>
                <SettingMenu style={{display: showMenu ? 'flex' : 'none'}}>
                    <ul>
                        <li>Adicionar Contato</li>
                        <li>Limpar Conversa</li>
                    </ul>
                </SettingMenu>
            
            </Content>
        </Container>
    )
}
