<?php
  $file = file_get_contents("https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075");

  $file = substr($file, 51);
  $file = str_replace('\"', '"', $file);
  $file = str_replace('\/', '/', $file);
  function search_for($str, $stop_string, &$from)
  {
    if (($tmp = strstr($from, $str)) == FALSE)
      return (FALSE);

    $tmp = substr($tmp, strlen($str));
    $res = "";
    $i = 0;
    while (isset($tmp[$i]) && !my_strcmp($tmp, $stop_string, $i))
    {
      $res .= $tmp[$i];
      $i++;
    }
    $from = substr($tmp, strlen($res));
    return ($res);
  }

  function my_strcmp($str1, $str2, $start)
  {
    $i = 0;
    while (isset($str1[$start]) && isset($str2[$i]))
    {
      if ($str1[$start] != $str2[$i])
        return (FALSE);
      $start++;
      $i++;
    }
    return (TRUE);
  }

  function getDatePart($date, $part)
  {
    $i = 0;
    $current_part = 0;
    $res = "";
    while (isset($date[$i]) && $current_part <= $part)
    {
      if ($date[$i] == '/')
      {
        $i++;
        $current_part++;
        continue;
      }
      if ($current_part == $part && $date[$i] >= '0' && $date[$i] <= '9')
        $res .= $date[$i];
      $i++;
    }
    return ($res);
  }

  function getMonthNameFromNumber($month)
  {
    if ($month == "01")
      return ("Janvier");
    if ($month == "02")
      return ("Février");
    if ($month == "03")
      return ("Mars");
    if ($month == "04")
      return ("Avril");
    if ($month == "05")
      return ("Mai");
    if ($month == "06")
      return ("Juin");
    if ($month == "07")
      return ("Juillet");
    if ($month == "08")
      return ("Août");
    if ($month == "09")
      return ("Septembre");
    if ($month == "10")
      return ("Octobre");
    if ($month == "11")
      return ("Novembre");
    if ($month == "12")
      return ("Décembre");
    return ("");
  }

  echo "<div class='col l12 s12 m12'>";
  $lastMonth = "00";
  $newMonth = false;
  while (($res = search_for('<table class="tarifsAvecDispo_detailUnMois_tarifUneDuree" data-duree-tarif="semaine" >', '</table>', $file)) != FALSE)
  {
    while (($res_td = search_for('<td', '</td>', $res)) != FALSE)
    {
        if (($du = search_for('<span class="du">', '</span>', $res_td)) != FALSE && ($au = search_for('<span class="au">', '</span>', $res_td)) != FALSE)
        {
          if ($lastMonth != getDatePart($du, 1))
          {
            if ($lastMonth != "00")
              echo "</div>";
            echo "<div class='col l12'><center><h4>".getMonthNameFromNumber(getDatePart($du, 1))."</h4></center>";
            $lastMonth = getDatePart($du, 1);
          }
          echo "<div class='col l3 s12 m6 z-depth-1' style='height:160px;'><p class='center-align' style='border:solid; border-width:2px; font-size:20px;'><b>".$du."<br/>".$au."</b></p>";
        }
        else
          break;
        if (($tarif_indisp = search_for('<span>', '</span>', $res_td)) != FALSE)
        {
          if ($tarif_indisp == "Partially available")
          {
            echo '<center><a href="https://reservation.itea.fr/resa/etape1.php?ident=gites29_b'.date("Y").'.1.29G17250.G&exe='.date("Y").'&dep=29&jour='.getDatePart($du, 0).'&mois='.getDatePart($du, 1).'&annee='.getDatePart($du, 2).'&duree=14&referer=www.google.fr&OPE=WFNGF" target="_blank">';
            echo '<span class="green-text button_reservation_partiel_dispo"><b>Quinzaine seulement</b></span>';
            echo '</a></center>';
          }
          else
          {
            echo "<center><span class='red-text'><b>Indisponible</b></span></center>";
          }
        }
        else if (($tarif = search_for('<span class="sansPromo">', '</span>', $res_td)) != FALSE)
        {
          echo '<center><a href="https://reservation.itea.fr/resa/etape1.php?ident=gites29_b'.date("Y").'.1.29G17250.G&exe='.date("Y").'&dep=29&jour='.getDatePart($du, 0).'&mois='.getDatePart($du, 1).'&annee='.getDatePart($du, 2).'&duree=7&referer=www.google.fr&OPE=WFNGF" target="_blank">';
          echo '<span class="green-text button_reservation"><b>&nbsp;'.$tarif.'&nbsp;</b></span>';
          echo '</a></center>';
        }
        else
          break;
        echo "<br/></div>";
    }
  }
  echo "</div>";
  echo "</div>";
?>
