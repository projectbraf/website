import { HeaderStyle } from "./Header.style";
import Logo from "./Logo/Logo";

const Header = () => {
    return <HeaderStyle
                initial={{
                    height: '0px'
                }}
                animate={{
                    height: '60px'
                }}
                transition={{
                    duration: 0.8
                }}
            >
        <Logo/>
    </HeaderStyle>
}

export default Header;