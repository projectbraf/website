import { TextContainerStyled } from './TextContainer.style';
import ModType from '../../Utils/ModType';
import Description from './Description/Description';
import Review from './Review/Review';

const TextContainer = ({mod}: {mod: ModType}) => {
    return <TextContainerStyled
            initial={{
                paddingTop: '20px',
                opacity: 0
            }}
            animate={{
                paddingTop: '0px',
                opacity: 1
            }}
            transition={{
                delay:2,
                duration: 2
            }}
        >
            <Description mod={mod}/>
            <Review mod={mod}/>
        </TextContainerStyled>
}

export default TextContainer;