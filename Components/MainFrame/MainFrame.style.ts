import { styled } from '@stitches/react';
import { motion } from 'framer-motion';

export const MainFrameStyle = styled(motion.div, {
    zIndex: 0,
    height: '280px',
    width: '94%',
    backgroundColor: 'White',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px Black',
    'img': {
        width: '100%',
        height: '280px'
    }
})