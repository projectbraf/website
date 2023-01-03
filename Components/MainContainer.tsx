import { MainContainerStyle } from "./MainContainer.style";

const MainContainer = (props: any) => {
    return <MainContainerStyle>
        {props.children}
    </MainContainerStyle>
}

export default MainContainer;