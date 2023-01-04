import ModType from "../../../Utils/ModType";
import ReviewItem from "./ReviewItem/ReviewItem";
import ReviewItemButton from "./ReviewItem/ReviewItemButton/ReviewItemButton";
import { ReviewStyle } from "./ReviewStyle";

const Review = (props: {mod: ModType}) => {
    return <ReviewStyle>
            <ReviewItem>
                <p>Neste exato momento, o projeto, que atualmente conta com {props.mod.subscription} inscritos, está disponível única e exclusivamente na plataforma Steam Workshop, confira!</p>
                <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2223739438">
                    <ReviewItemButton type={'Steam'}>
                        Steam
                    </ReviewItemButton>
                </a>
            </ReviewItem>
            <ReviewItem>
                <p>Se você está procurando por uma comunidade brasileira de jogadores de Arma 3 para interagir, discussões sobre o mod, missões informais semanalmente ou um grupo para integrar-se, encontre tudo isso em nosso discord!</p>
                <a href="https://discord.gg/4VYrgqTx">
                    <ReviewItemButton type={'Discord'}>
                        Discord
                    </ReviewItemButton>
                </a>
            </ReviewItem>
        </ReviewStyle>
}

export default Review;