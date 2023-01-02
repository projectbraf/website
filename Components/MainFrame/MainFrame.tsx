import { MainFrameStyle } from "./MainFrame.style";
import ImagePicker from './ImagePicker';

const MainFrame = () => {
    return <MainFrameStyle
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay:1,
                duration: 1
            }}
        >
        <ImagePicker/>
    </MainFrameStyle>
}

export default MainFrame;