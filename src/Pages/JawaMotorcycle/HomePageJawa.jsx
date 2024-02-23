import React from 'react'
import Navbar from '../../Components/JawaMotorcycle/Navbar'
import Banner from '../../Components/JawaMotorcycle/Banner'
import SpeedOmeter from '../../Components/SpeedOmeter'
import View360 from '../../Components/View360'
import Highlights from '../../Components/Highlights'
import OurBlogs from '../../Components/OurBlogs'
import Gallery from '../../Components/Gallery'
import Footer from '../../Components/Footer'

export default function HomePageJawa() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SpeedOmeter/>
        <View360/>
        <Highlights/>
        <OurBlogs/>
        <Gallery/>
        <Footer/>
    


    </div>
  )
}
