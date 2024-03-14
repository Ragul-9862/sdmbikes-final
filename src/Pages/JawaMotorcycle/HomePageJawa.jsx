import React from 'react'
import Navbar from '../../Components/JawaMotorcycle/Navbar'
import Banner from '../../Components/JawaMotorcycle/Banner'
import SpeedOmeter from '../../Components/SpeedOmeter'
import Jawa360 from '../../Components/JawaMotorcycle/Jawa360'
import OurBlogs from '../../Components/OurBlogs'
import Gallery from '../../Components/Gallery'
import Footer from '../../Components/Footer'

export default function HomePageJawa() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SpeedOmeter/>
        <Jawa360/>
        <OurBlogs/>
        <Gallery/>
        <Footer/>
    


    </div>
  )
}
