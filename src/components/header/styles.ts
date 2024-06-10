import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  $iconIsactive?: boolean
}


export const Header = styled.header`
  position: fixed;
  z-index: 10;
  left: 80px;
  display: flex;
  margin-top: 12px;

  @media (max-width: 480px) {
    position: relative;
    margin-top: 8px;
    top: 5px;
    left: 10px;
  }
`

export const HeaderText = styled(motion.span)<Props>`
  font-size: 40px;
  font-weight: bold;
  display:flex;
  align-items: center;
  
  a {
    display:flex;
    align-items: center;
    text-decoration: none;
  }

  img {
    height: 40px;
    width: 40px;
    margin: 0 12px;
    display: ${props => props.$iconIsactive ? 'flex' : 'none'};
  }


  @media (max-width: 480px) {
    font-size: 30px;

    img {
    height: 32px;
    width: 32px;
    margin: 0 4px;
    }
  }
`