import { styled } from '../../../stitches.config';
import { motion } from 'framer-motion';
import logo from '../../../Utils/Images/logo.png';

export const LogoStyle = styled(motion.div,{
    width: '100px',
    backgroundImage: `url(${logo.src})`,
    backgroundColor: 'Green',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    boxShadow: '0px 4px 10px Black'
})