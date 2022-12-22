import { ModLogoStyle } from "./ModLogo.style";

const ModLogo = () => {
    return <ModLogoStyle
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