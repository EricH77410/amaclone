import React from 'react'
import './Home.css'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="The line startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood kMix KMX750RD, Robot Pâtissier, Robot pâtissier multifonctions avec Bol en Acier 5 L, 1000 Watt, Rouge"
            price={329.5}
            image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._AC_SX355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Echo Dot (3ème génération), Enceinte connectée avec Alexa, Tissu anthracite"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SX425_.jpg"
            rating={5}
          />
          <Product
            title="Nouveau Apple iPad Pro (11 pouces, Wi-Fi, 128 Go) - Gris sidéral (2e génération)"
            price={899.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            title="Nouveau Apple iPhone 12 Pro (256 Go) - Bleu Pacifique"
            price={1279.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung Curved Ultra-Wide Moniteur 49 LC49J890DKU - Écrans plats de PC (124.2 cm (48.9), 3840 x 1080 pixels, 5 ms, Black)"
            price={899.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
