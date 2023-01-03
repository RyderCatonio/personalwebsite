import React from 'react'
import './NavStyles.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


export default function Navigation() {
    return (
        <>
            <div className="drop-down">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>Resume</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <nav className="navbar">
                <div className="name-title">
                    <p1>Ryder Catonio</p1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>



        </>

    )
}
