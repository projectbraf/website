import { FooterStyle } from "./Footer.style";

const Footer = () => {
    return <FooterStyle
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
            >
            <h3>BRAF Mod - Todos os direitos reservados</h3>
        </FooterStyle>
}

export default Footer;