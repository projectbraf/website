import { styled } from '../../../../../stitches.config';
import { motion } from "framer-motion";

export const ReviewItemButtonStyle = styled(motion.button, {
    display: 'inline-block',
    fontFamily: 'Whitney, "Open Sans", Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: '11pt',
    borderRadius: '3px',
    cursor: 'pointer',
    height: '45px',
    width: '250px',
    margin: '0 auto',
    boxShadow: '0px 4px 5px 2px rgba(0, 0, 0, 0.2)',
    '&:hover':{
        transition: '0.5s',
        scale: 1.1,
        boxShadow: '0px 6px 7px 4px rgba(0,0,0,0.3)'
    },
    '@desktop':{
        width: '200px'
    },
    variants: {
        color:{
            Steam: {
                backgroundColor: '#223371',
                border: '2px solid #223371',
                color: '#fff'
            },
            Discord:{
                backgroundColor: '#7289da',
                border: '2px solid #7289da',
                color: '#fff'
            }
        }
    }
})