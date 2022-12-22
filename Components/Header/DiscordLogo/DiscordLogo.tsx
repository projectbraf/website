import { DiscordLogoStyle } from "./DiscordLogo.style";

const DiscordLogo = () => {
    return <DiscordLogoStyle
                initial={{
                    width: '0px',
                    height: '80px',
                    marginRight: '0'
                }}
                animate={{
                    width: '80px',
                    height: '80px',
                    marginRight: '10px'
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

export default DiscordLogo;