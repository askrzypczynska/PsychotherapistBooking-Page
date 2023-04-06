import React from "react";
import { Container, Content } from "./styles";
import { 
    FaTimes
  } from 'react-icons/fa'

import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
    
    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SidebarItem Text="Strona główna" />
                <SidebarItem Text="O psychoterapii" />
                <SidebarItem Text="Zakres leczenia" />
                <SidebarItem Text="Terapia małżeńska" />
                <SidebarItem Text="Terapia grupowa" />
                <SidebarItem Text="O mnie" />
                <SidebarItem Text="Kontakt" />
            </Content>
        </Container>
    )
}

export default Sidebar