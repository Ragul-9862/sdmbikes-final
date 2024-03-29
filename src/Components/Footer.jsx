import React from 'react'
export default function Footer() {
  return (
    <div>
     <footer className="footer-wrapper">
  <div className="container-fluid ">
    <div className="row footer-wrapper-main">
      <div className="col-lg-3">
        <div className="footer">
          <img className="img-fluid footer-logo" src={require("../Components/assets/Navbar/logo.png")} alt="logo" />
          <p className='text-center mt-3  footer-logo-info '>"Revved up in Retro"</p>
        </div>
      </div>
      <div className="col-lg-5 mt-4">
        <div className="footer-content text-center">
          <h5>Follow Us On</h5>
          <div className="social d-flex justify-content-center">
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/fb.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href=" https://www.instagram.com/sdm_jawayezdi/ "><img src={require("../Components/assets/Footer/ins.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/x.png")} alt /></a>
            </div>
            {/* <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/print.png")} alt /></a>
            </div> */}
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/in.png")} alt /></a>
            </div>
          </div>
          <div className="contact mt-2">
            <ul>
              <li><a href="tel: +91 9677759005"><i className="bi bi-telephone-fill" />+91 9677759005
                </a>
              </li>
              <li><a href="info@shreedhanammotors.com"><i className="bi bi-envelope-open" />info@shreedhanammotors.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="map-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.938054602987!2d76.98281827504579!3d11.043271289122158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzM1LjgiTiA3NsKwNTknMDcuNCJF!5e0!3m2!1sen!2sin!4v1711711081544!5m2!1sen!2sin" width="100%" height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
