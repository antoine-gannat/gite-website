import * as React from 'react'

export default function RightNav (): JSX.Element {
  return <div>
    <div className="col l2 s3 m3" style={{ marginTop: '10px' }}>
      <a href="piscine.php"><img className="col l12 s12 m12 round_picture  circle" src="images/piscine/picture_1.jpg" alt="piscine"/><p className="center-align under-text"><b>La piscine</b></p></a>
      <a href="chambre.php"><img className="col l12 s12 m12 round_picture  circle" src="images/chambre/picture_1.jpg" alt="chambres"/><p className="center-align under-text"><b>Les chambres</b></p></a>
      <a href="cuisine.php"><img className="col l12 s12 m12 round_picture  circle" src="images/cuisine/picture_1.jpg" alt="cuisine"/><p className="center-align under-text"><b>La cuisine</b></p></a>
      <a href="exterieur.php"><img className="col l12 s12 m12 round_picture  circle" src="images/exterieur/picture_1.jpg" alt="exterieur"/><p className="center-align under-text"><b>L&apos;exterieur</b></p></a>
      <a href="sejour.php"><img className="col l12 s12 m12 round_picture  circle" src="images/sejour/picture_1.jpg" alt="sejour"/><p className="center-align under-text"><b>Le sejour</b></p></a>
      <a href="sdj.php"><img className="col l12 s12 m12 round_picture  circle" src="images/sdj/picture_1.jpg" alt="salle de jeux"/><p className="center-align under-text"><b>La salle de jeux</b></p></a>
    </div>
    <p className="right"><i className="fab fa-facebook"></i>&copy; Copyright 2016 Gite de kerhéré</p>
  </div>
}
