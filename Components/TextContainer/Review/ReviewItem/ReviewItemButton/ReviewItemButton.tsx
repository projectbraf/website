import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { ReviewItemButtonStyle } from "./ReviewItemButton.style";

const ReviewItemButton = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, type: 'Steam' | 'Discord'; }) => {
    return <ReviewItemButtonStyle
                initial={{
                    scale: 1
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                color={props.type}>
                {props.children}
            </ReviewItemButtonStyle>
};

export default ReviewItemButton;