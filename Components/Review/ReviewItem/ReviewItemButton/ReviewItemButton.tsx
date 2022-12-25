import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { ReviewItemButtonStyle } from "./ReviewItemButton.style";

const ReviewItemButton = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, type: 'Steam' | 'Discord'; }) => {
    return <ReviewItemButtonStyle color={props.type}>{props.children}</ReviewItemButtonStyle>
};

export default ReviewItemButton;