import * as React from 'react'

export default function Navbar () : JSX.Element {
  const reservationLink = 'http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190'

  return <header>
    <div className="center header">
      <img src="images/epis.png" alt="epis" />
      <a href="index.php" className="black-text" title="accueil"><h1>Gîte de Kerhéré</h1></a>
      <h2 className="header-subtitle">Gîte avec piscine intérieure en Bretagne</h2>
    </div>
    <div className="container row col l12 s12 m12">
      <ul className="side-nav" id="mobile-demo">
        <li className="left col l12 m12 s12"><a href="index.php" title="Accueil"><i className="material-icons v-align-middle">home</i>Accueil</a></li>
        <li className="left col l12 m12 s12"><a href="galerie.php" title="Galerie photos"><i className="material-icons v-align-middle">photo</i>Galerie photos</a></li>
        <li className="left col l12 m12 s12"><a href="environnement.php" title="Environnement"><i className="material-icons v-align-middle">landscape</i>Environnement</a></li>
        <li className="left col l12 m12 s12"><a href="localisation.php" title="Localisation"><i className="material-icons v-align-middle">location_on</i>Localisation</a></li>
        <li className="left col l12 m12 s12"><a href="contact.php" title="Contact et Tarifs"><i className="material-icons v-align-middle">euro_symbol</i>Contact / Tarifs</a></li>
        <li className="left col l12 m12 s12"><a target="_blank" rel="noopener noreferrer" title="Réservation" href={reservationLink}><i className="material-icons" >assignment</i>Réservation</a></li>
      </ul>
      <nav className="col l12 m12 s12 grey">
        <div className="nav-wrapper">
          <ul className="hide-on-small-only">
            <li className="left"><a href="index.php" title="Accueil"><i className="material-icons left">home</i><span className="somaire_content">Accueil</span></a></li>
            <li className="left"><a href="galerie.php" title="Galerie photos"><i className="material-icons left">photo</i><span className="somaire_content">Galerie photos</span></a></li>
            <li className="left"><a href="environnement.php" title="Environnement"><i className="material-icons left">landscape</i><span className="somaire_content">Environnement</span></a></li>
            <li className="left"><a href="localisation.php" title="Localisation"><i className="material-icons left">location_on</i><span className="somaire_content">Localisation</span></a></li>
            <li className="right"><a href="contact.php" title="Contact et Tarifs"><i className="material-icons right">euro_symbol</i><span className="somaire_content">Contact / Tarifs</span></a></li>
            <li className="right"><a target="_blank" rel="noopener noreferrer" title="Réservation" href={reservationLink}><i className="material-icons right">assignment</i><span className="somaire_content">Réservation</span></a></li>
          </ul>
          <ul className="hide-on-med-and-up center">
            <li><button data-activates="mobile-demo" title="menu" className="button-collapse"><i className="material-icons">menu</i></button></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
}
