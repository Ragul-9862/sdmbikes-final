import React from 'react'
import Latest from '../Components/Latest'
import Navbar from '../Components/Navbar'
import SpeedOmeter from '../Components/SpeedOmeter'
import View360 from '../Components/View360'
import Footer from '../Components/Footer'
import OurBlogs from '../Components/OurBlogs'
import Gallery from '../Components/Gallery'


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Latest />
      <SpeedOmeter />
      <View360 />
      <OurBlogs/>
      <Gallery/>
      <Footer />

    </div>
  )
}

