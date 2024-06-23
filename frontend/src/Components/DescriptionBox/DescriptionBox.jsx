import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">
                Description
            </div>
            <div className="descriptionbox-navbox fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-desciption">
            <p>An ecommerce website is an online platform that facilitates buying and selling of products and services over the internet. It serves as a virtual market where businesses and invidiuals can showcase their products and services to a global audience. It acts as a medium between buyers and sellers, where buyers can purchase products and services online using their credit cards or other modes of payment.</p>
            <p>E-commerce websites typically display products or services in a catalogue format. The catalogue is usually stored in a database and is made available on the website. The products and services are displayed as text, images, audio, video, animations, etc. The website also facilitates online transactions through a payment gateway.</p>
        </div>
    </div>
  )
}

export default DescriptionBox