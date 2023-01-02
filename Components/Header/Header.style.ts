import { styled } from '../../stitches.config';
import { motion } from 'framer-motion';

export const HeaderStyle = styled(motion.div,{
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    backgroundColor: '#222',
    boxShadow: '0px 3px 10px Black',
    paddingTop: '8px',
    '@desktop': {
        height: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none'
    }
})