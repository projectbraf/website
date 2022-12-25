import { MainFrameStyle } from "./MainFrame.style";

const MainFrame = () => {
    return <MainFrameStyle
            initial={{
                marginTop: '130px',
                opacity: 0
            }}
            animate={{
                marginTop: '100px',
                opacity: 1
            }}
            transition={{
                delay:1,
                duration: 1
            }}
        >
        
    </MainFrameStyle>
}

export default MainFrame;