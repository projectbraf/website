import { useEffect } from "react";
import { MainContainerStyle } from "./MainContainer.style";

const MainContainer = (props: any) => {
    useEffect(() => {
        document.title = "BRAF Mod";
    }, []);

    return <MainContainerStyle>
        {props.children}
    </MainContainerStyle>
}

export default MainContainer;