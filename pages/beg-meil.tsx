import Home from "@/components/Home/Home";
import { IComponentBaseProps } from "@/components/types";
import { getLocalizationProps } from "@/utils/localization/localization";
import { localizedStringsBegMeil } from "@/utils/localization/localizedStrings.beg-meil";
import { GetStaticProps } from "next";

export default function BegMeil(props: IComponentBaseProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<IComponentBaseProps> = ({
  locale,
}) => {
  return {
    props: {
      ...getLocalizationProps(locale, localizedStringsBegMeil),
      data: {
        siteName: "beg-meil",
        // TO CHANGE
        googleMapUrl:
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d334.6369709971916!2d-3.986407299924001!3d47.857108499405186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1692265878360!5m2!1sen!2sfr",
        address: "7 Ham. des Dunes, 29170 Fouesnant",
        // TO CHANGE
        gdfReviewsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=avis&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250",
        // TO CHANGE
        gdfReservationsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075",
      },
    },
  };
};
