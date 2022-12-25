import ModType from "../../Utils/ModType";
import ReviewItem from "./ReviewItem/ReviewItem";
import ReviewItemButton from "./ReviewItem/ReviewItemButton/ReviewItemButton";
import { ReviewStyle } from "./ReviewStyle";

const Review = (props: {mod: ModType}) => {
    return <ReviewStyle>
            <ReviewItem>
                <p>O projeto, que atualmente conta com cerca de {props.mod.subscription} inscritos, está disponível única e exclusivamente na plataforma Steam Workshop, confira!</p>
                <ReviewItemButton type={'Steam'}>Steam</ReviewItemButton>
            </ReviewItem>
            <ReviewItem>
                <p>Se você está procurando por uma comunidade brasileira de jogadores de Arma 3 para interagir, discussões sobre o mod e missões informais semanalmente,encontre tudo isso em nosso discord!</p>
                <ReviewItemButton type={'Discord'}>Discord</ReviewItemButton>
            </ReviewItem>
        </ReviewStyle>
}

export default Review;