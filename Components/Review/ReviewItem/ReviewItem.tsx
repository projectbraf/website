import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { ReviewItemStyle } from "./ReviewItem.style";

const ReviewItem = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    return <ReviewItemStyle
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                delay:0.5,
                duration: 1
            }}
        >
        {props.children}
    </ReviewItemStyle>
}

export default ReviewItem;