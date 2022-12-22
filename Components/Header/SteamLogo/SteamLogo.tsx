import { SteamLogoStyle } from "./SteamLogo.style";

const SteamLogo = () => {
    return <SteamLogoStyle
                initial={{
                    width: '0px',
                    height: '80px',
                    marginLeft: '0'
                }}
                animate={{
                    width: '80px',
                    height: '80px',
                    marginLeft: '10px'
                }}
                transition={{
                    delay: 0.7
                }}
                whileHover={{
                    width: '100px',
                    height: '100px',
                    transition: {
                        delay: 0
                    }
                }}
            />
}

export default SteamLogo;