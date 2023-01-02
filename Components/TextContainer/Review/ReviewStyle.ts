import { styled } from '../../../stitches.config';
import { motion } from "framer-motion"

export const ReviewStyle = styled(motion.div, {
    display: 'flex',
    flexFlow: 'column nowrap',
    color: 'white',
    textAlign: 'justify',
    '@tablet': {
        flexFlow: 'row nowrap',
        gap: '15px',
        padding: '0 20px'
    },
    '@desktop': {
        gap: '0px',
        padding: '0 0px'
    }
})