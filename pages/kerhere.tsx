import Home from "@/components/Home/Home";
import { IComponentBaseProps } from "@/components/types";
import { getLocalizationProps } from "@/utils/localization/localization";
import { localizedStringsKerhere } from "@/utils/localization/localizedStrings.kerhere";
import { GetStaticProps } from "next";

export default function Kerhere(props: IComponentBaseProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<IComponentBaseProps> = ({
  locale,
}) => {
  return {
    props: {
      ...getLocalizationProps(locale, localizedStringsKerhere),
      data: {
        siteName: "kerhere",
        googleMapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.4819459257537!2d-4.025835684350243!3d48.15879197922521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48112fef6730783f%3A0x472160ddc66f7d07!2sGite%20de%20Kerh%C3%A9r%C3%A9%20avec%20piscine%20int%C3%A9rieure%20sauna%20baln%C3%A9o%20location%20saisonni%C3%A8re%20Finist%C3%A8re%20Bretagne!5e0!3m2!1sen!2sfr!4v1595003012002!5m2!1sen!2sfr",
        address: "Kerhéré, 29510 BRIEC, FRANCE",
        gdfReviewsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=avis&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250",
        gdfReservationsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075",
      },
    },
  };
};
