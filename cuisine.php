<?php include_once("header.php") ?>
<div class="white col l12 s12 m12">
        <div class="col l10 m9 s9">
          <div class="slider">
            <button class="prev_button white" onclick="prev();"><i class="material-icons">keyboard_arrow_left</i></button>
            <button class="next_button white right" onclick="next();"><i class="material-icons">keyboard_arrow_right</i></button>
            <ul class="slides">
              <li>
                <img src="images/cuisine/picture_1.jpg" alt="cuisine 1"/>
              </li>
              <li>
                <img src="images/cuisine/picture_2.jpg" alt="cuisine 2"/>
              </li>
              <li>
                <img src="images/cuisine/picture_3.jpg" alt="cuisine 3"/>
              </li>
              <li>
                <img src="images/cuisine/picture_4.jpg" alt="cuisine 4"/>
              </li>
              <li>
                <img src="images/cuisine/picture_5.jpg" alt="cuisine 5"/>
              </li>
            </ul>
          </div>
          <div class="col l12 m12 s12 z-depth-1" style="margin-top:30px;">
            <p style="font-size:20px;" class="col l6 m12 s12">
              <b>Cuisine contemporaine</b><br/>
              - Four<br/>
              - Micro-onde<br/>
              - Lave vaisselle<br/>
              - Frigo-congélateur<br/>
              - Plaque vitrocéramique<br/>
            </p>
            <p style="font-size:20px;" class="col l6 m12 s12">
            <br/>
              - Cafetières : classique et Nespresso<br/>
              - Grille pain<br/>
              - Bouilloire électrique<br/>
              - Robot de cuisine<br/>
              - Appareil à raclette
            </p>
            <p style="font-size:20px;" class="col l6 m12 s12">
              <b>Arrière-cuisine</b><br/>
              - Lave linge<br/>
              - Sèche linge
            </p>
          </div>
        </div>
<?php include_once('right-nav.php'); ?>
<?php include_once('footer.php'); ?>