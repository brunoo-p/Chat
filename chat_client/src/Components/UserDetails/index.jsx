import React, { useState } from 'react';
import { Container, DotsSettings, SettingMenu, Content, UserImage, UserName } from './styles';
import avatarDefault from '../../Assets/avatar.png'

export default function UserDetails() {
    
    const [ showMenu, setShowMenu ] = useState(false);

    const settingOptions = [ 
        "Adicionar Contato",
        "Limpar Conversa"
    ]

    const handleMenu = () => {
        setShowMenu(!showMenu);   
    }

    let className = showMenu ? 'open' : '';
    return (
        <Container>
            <Content>
                <UserImage src={avatarDefault}/>
                <UserName> Nome usuário</UserName>

                <DotsSettings onClick={handleMenu}/>
            
            </Content>
                <article>
                    <SettingMenu className={className} style={{height: settingOptions.length * 25}}>
                        <ul>
                            <li>Adicionar Contato</li>
                            <li>Limpar Conversa</li>
                        </ul>
                    </SettingMenu>
                </article>
        </Container>
    )
}
