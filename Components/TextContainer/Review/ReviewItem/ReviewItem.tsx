import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { ReviewItemStyle } from "./ReviewItem.style";

const ReviewItem = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    return <ReviewItemStyle>
        {props.children}
    </ReviewItemStyle>
}

export default ReviewItem;