import { styled } from "@stitches/react";
import { motion } from "framer-motion";

export const ReviewItemStyle = styled(motion.div, {
    zIndex: 0,
    height: 'fit-content',
    width: '84%',
    backgroundColor: 'White',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px Black',
    margin: '20px auto',
    padding: '5%',
    paddingTop: '2%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    color:'#111'
})