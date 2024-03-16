import React from 'react'
import HeroSection from '../components/HeroSection';
import About from "../components/About";
import Qualities from '../components/Qualities';
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Reservation from '../components/Reservation';

 
const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <WhoAreWe/>
    <Team/>
    <Menu/>
    <Footer/>
    <Reservation/>
    </>
  )
}
  
  export default Home 