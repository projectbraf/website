import { styled } from '../../../stitches.config';
import { motion } from "framer-motion";

export const DescriptionStyle = styled(motion.div,{
    zIndex: 0,
    height: 'fit-content',
    width: '84%',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px Black',
    padding: '10px 5%',
    textAlign: 'justify',
    color: '#111',
    'h4': {
        textAlign: 'center'
    },
    'p': {
        textAlign: 'left'
    },
    '@mobile': {
        marginTop: '20px'
    },
    '@desktop': {
        color: 'white',
        backgroundColor: 'rgba(0,0,0, 0.7)',
    }
})