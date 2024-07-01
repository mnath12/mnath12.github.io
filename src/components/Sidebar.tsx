import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu, FiHome } from "react-icons/fi";
import SidebarItem from "./SidebarItem";

function Sidebar( {activeButton}: any) {
    const [size, changeSize] = useState('large')
    const [active, changeActive] = useState(false)
    function changeActiveButton () {
        if (active === true) {
            changeActive(false)
        } else {
            changeActive(true)
        }
        console.log(active)
    }
    return (
        <Flex
            pos = 'sticky'
            h = '95vh'
            boxShadow = '0 4px 12 px 0 rgba(0,0,0,0.05)'
            w = {size == 'small' ? '75px' : "200px"}
            flexDir = 'column'
            justifyContent = 'space-between'>
            <Flex 
            flexDir='column'
            alignItems = 'flex-start'
            borderRadius={size=='small'? '15px': '30px'}
            as = 'nav'>
                <IconButton 
                    background='none'
                    _hover={{background: 'none'}}
                    icon={<FiMenu/>}
                    onClick = { () => {
                        if (size == 'small') 
                            changeSize('large')
                        else
                            changeSize('small')
                    }}
                    aria-label="Size Toggle">
                </IconButton>
                <SidebarItem changeActiveButton = {changeActiveButton} to = '/#/projects/sudoku' navSize = {size} icon = {FiHome} title = "Sudoku" active = {activeButton == "sudoku"}/>
                <SidebarItem changeActiveButton = {changeActiveButton} to = '/#/projects/reversi' navSize = {size} icon = {FiHome} title = "Reversi" active = {activeButton == "reversi"} />
                <SidebarItem changeActiveButton = {changeActiveButton} to = '/#/projects/stocks' navSize = {size} icon = {FiHome} title = "MLStockPredict" active = {activeButton == "stocks"} />
            </Flex>
            

        </Flex>
        
    )
}

export default Sidebar