import React from 'react'

export default function SpeedOmeter() {
  return (
    <section className='container-fluid speedometer'>
    <div className="speedometer-wrapper row">
      <div className='col-lg-7 col-md-2 col-sm-2'>
        <img src={require("../Components/assets/SpeedOmeter/speedometer-bg.png")} className='img-fluid d-none d-lg-block' alt="" />
      </div>
    <div className="speedometer-content col-lg-4 col-md-10 col-sm-10">
      <h2>Digital Speedometer</h2>
      <span>INSTRUMENT CONSOLE</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis quam sapien
        mollis
        mollis .Aliquam ferme ntum sapien odio, ac eleifend libero bibendum dictum ligula.
        Vivamus Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis quam sapien mollis
        mollis
        .Aliquam ferme ntum sapien odio, ac eleifend libero bibendum dictum ligula. Vivamus
      </p>
      {/* <button className="custom-btn">READ MORE</button> */}
    </div>
  </div>
    </section>

  )
}
