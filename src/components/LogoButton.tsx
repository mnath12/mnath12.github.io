import { Link } from '@chakra-ui/react'




function LogoButton( {children, to = "/"}: any ) {
    return (
        <Link href={to}>
            {children}
        </Link>
        
    )
}

export default LogoButton