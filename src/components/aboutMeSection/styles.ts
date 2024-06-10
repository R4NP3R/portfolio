import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutMeSectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    z-index: 2;
    padding-top: 20px;
    font-size: 32px;
  }


  @media (max-width: 480px) {   
    
    h1 {
      padding: 12px;
    }
  }

  @media (max-height: 667px) {
    margin-bottom: 200px; 
  }
  
`

export const AboutMeSection = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px;

  @media (max-width: 480px) {
    align-items: center;
    padding: 0px;
  }

`

export const AboutMeSectionImage = styled.img`
  margin-right: 250px;
  width: 340px;
  margin-top: 20px;
  display: flex;
  border-radius: 100%;
  padding: 24px;

  @media (max-width: 480px) {
    margin: 0;
    width: 260px;
  }

  @media (min-width: 1921px) {
    margin-right: 450px;
  }
`

export const AboutMeSectionDescription = styled.div`
  width: 1000px;
  position: absolute;
  z-index: 2;
  top: 80px;
  right: 560px;
  font-size: 22px;  

  @media (max-width: 480px) {
    position: static;
    width: 100%;
    font-size: 18px;
    text-align: center;
  }

  @media (min-width: 1921px) {
    left: 400px;
  }
`

export const Contacts = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;  
  align-items: center;

  h1 {
    position: absolute;
  }

`

export const ContactsListContainer = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  display: flex;

  @media (max-width: 480px) {
    top: 60px;
  }
`

export const ContactsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ContactsLinks = styled(motion.a)`
  margin-top: 24px;
  display: flex;
  align-items: end;

  p {
    font-size: 34px;
  }

  img {
    width: 44px;
    margin-right: 12px;
  }

  @media (max-width: 480px) {
    margin-top: 14px;

    p {
      font-size: 20px
    }

    img {
      width: 30px;
    }

  }

`
export const BackgroundVideo = styled(motion.div)`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  filter: brightness(0.4);
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
  }
`