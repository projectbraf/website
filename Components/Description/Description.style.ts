import { styled } from "@stitches/react";
import { motion } from "framer-motion";

export const DescriptionStyle = styled(motion.div,{
    zIndex: 0,
    height: 'fit-content',
    width: '84%',
    backgroundColor: 'White',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px Black',
    padding: '10px 5%',
    'p': {
        textAlign: 'left'
    }
})