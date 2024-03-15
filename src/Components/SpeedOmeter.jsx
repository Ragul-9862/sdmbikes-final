import React from 'react'

export default function SpeedOmeter() {
  return (
    <section className='container-fluid speedometer'>
    <div className="speedometer-wrapper row">
      <div className='col-lg-7 col-md-2 col-sm-2 speedometer-wrapper-infos'>
        <img src={require("../Components/assets/SpeedOmeter/speedometer-bg.png")} className='img-fluid d-none d-lg-block' alt="" />
      </div>
    <div className="speedometer-content col-lg-4 col-md-10 col-sm-10">
      <h2>Digital Speedometer</h2>
      <span>INSTRUMENT CONSOLE</span>
      <p>The bike's instrument console features a digital speedometer providing precise readings in both kilometers per hour and miles per hour. 
        Its central position ensures easy visibility for the rider, enhancing safety and convenience on the road. Additionally, the digital display offers clear and accurate speed information, contributing to an enjoyable riding experience. 
      </p>
    </div>
  </div>
    </section>

  )
}
