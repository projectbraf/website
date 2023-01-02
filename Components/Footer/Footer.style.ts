import { createStitches, styled as Styled } from '@stitches/react';
import { motion } from 'framer-motion';

export const FooterStyle = Styled(motion.div, {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    boxShadow: '0px 3px 10px Black',
    paddingTop: '8px',
    marginTop: '20px',
    '& h3,h4': {
        margin: '0 auto',
        color: '#ccc'
    },
})