import { Icon, IconButton, Link } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { FaGithub } from "react-icons/fa";



function LogoButton( {children, to = "/"}: any ) {
    return (
        <Link href={to}>
            {children}
        </Link>
        
    )
}

export default LogoButton