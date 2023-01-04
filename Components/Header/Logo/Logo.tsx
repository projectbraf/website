import { LogoStyle } from "./Logo.style";

const ModLogo = () => {
    return <LogoStyle
        initial={{
            height: '0'
        }}
        animate={{
            height: '100px'
        }}
        transition={{
            delay: 0.5
        }}
    />
}
export default ModLogo;