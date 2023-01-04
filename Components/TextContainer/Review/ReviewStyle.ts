import { styled } from '../../../stitches.config';
import { motion } from "framer-motion"

export const ReviewStyle = styled(motion.div, {
    display: 'flex',
    flexFlow: 'column nowrap',
    color: 'white',
    textAlign: 'justify',
    '@mobile': {
        gap: '0px',
        'div:nth-child(2)': {
            marginTop: 0
        }
    },
    '@tablet': {
        flexFlow: 'row nowrap',
        margin: 'auto',
        justifyContent: 'center',
        width: '95%',
        gap: '10%'
    },
    '@desktop': {
        gap: '0px',
        padding: '0 0px'
    }
})