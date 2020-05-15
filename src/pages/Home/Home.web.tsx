import * as React from 'react'
import Navbar from '../../components/Navbar/Navbar.web'
import RightNavbar from '../../components/Navbar/RightNav.web'

export default function Home (): JSX.Element {
  return <div>
    <Navbar/>
    <div className="white col l12 s12 m12">
      <div className="col l10 m9 s9">
        <div className="slider">
          <button className="prev_button white"><i className="material-icons">keyboard_arrow_left</i></button>
          <button className="next_button white right"><i className="material-icons">keyboard_arrow_right</i></button>
          <ul className="slides">
            <li><img src="images/piscine/picture_1.jpg" alt="piscine"/></li>
            <li><img src="images/exterieur/picture_10.jpg" alt="gite"/></li>
            <li><img src="images/piscine/picture_3.jpg" alt="piscine"/></li>
            <li><img src="images/exterieur/picture_12.jpg" alt="gite"/></li>
          </ul>
        </div>
        <p className="center-align ft-size-20"><b>Gîte indépendant avec piscine intérieure, exposé sud, situé entre Quimper et Châteaulin.</b></p>
        <p className="center-align ft-size-20"><b>Idéal pour une remise en forme dans un cadre verdoyant et vallonné, au pied des Montagnes Noires.</b></p>
        <div className="col l12 s12 m12">
          <img className="col l3 s12 m5 left" src="images/environnement/picture_1.jpg" alt="vache"/>
          <p className="col l6 s12 m5 center-align ft-size-25"><i>&quot;Au coeur du Finistère, découvrez un pays de contrastes et de traditions, une terre d&apos;accueil et de légendes&quot;</i></p>
          <img className="col l3 s12 m5 right" src="images/autre/picture_3.jpg" alt="paysage plage"/>
        </div>
      </div>
    </div>
    <RightNavbar/>
  </div>
}
