import ModType from "../../Utils/ModType";
import { DescriptionStyle } from "./Description.style";

const Description = (props: {mod: ModType}) => {
    const { mod } = props;
    return <DescriptionStyle
            initial={{
                marginTop: '60px',
                opacity: 0
            }}
            animate={{
                marginTop: '20px',
                opacity: 1
            }}
            transition={{
                delay:2,
                duration: 1
            }}
        >
        <h4>{mod.title}</h4>
        <p>Brazilian Armed Forces Mod(BRAF Mod) é um mod que inclui as Forças Armadas Brasileiras à plataforma Arma 3. Tendo início em 2020 em uma coalizão de gamers brasileiros, o mod une diferentes áreas do conhecimento para planejar, agrupar e desenvolver um novo mod, aberto a desenvolvedores que queiram entregar contribuições ao mod.</p>
    </DescriptionStyle>
}

export default Description;