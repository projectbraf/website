import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

export const TextContainerStyled = styled(motion.div,{
    '@tablet': {
        marginTop: '20px'
    },
    '@desktop': {
        overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column nowrap',
        height: '545px',
        width: '600px',
        marginLeft: '100px',
        marginTop: '100px'
    }
})