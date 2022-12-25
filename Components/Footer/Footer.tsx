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
            <h4>Landing Page por Valmo Trindade</h4>
        </FooterStyle>
}

export default Footer;