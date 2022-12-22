import DiscordLogo from "./DiscordLogo/DiscordLogo";
import { HeaderStyle } from "./Header.style";
import ModLogo from "./ModLogo/ModLogo";
import SteamLogo from "./SteamLogo/SteamLogo";

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
        <DiscordLogo/>
        <ModLogo/>
        <SteamLogo/>
    </HeaderStyle>
}

export default Header;