import { styled } from '../../stitches.config';
import { motion } from 'framer-motion';

export const MainFrameStyle = styled(motion.div, {
    zIndex: 0,
    height: 'calc(230px + 10vmin)',
    width: '94%',
    backgroundColor: 'White',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px Black',
    marginTop: '60px',
    '@mobile': {
        height: 'calc(230px + 10vmin)',
        'img': {
            width: '100%',
            height: 'calc(230px + 10vmin)'
        }
    },
    '@tablet': {
        height: 'calc(280px + 10vmin)',
        'img': {
            width: '100%',
            height: 'calc(280px + 10vmin)',
        }
    },
    '@desktop': {
        marginTop: '0',
        position: 'absolute',
        'img': {
            width: '100vmax',
            height: '100vh',
        }
    }
})