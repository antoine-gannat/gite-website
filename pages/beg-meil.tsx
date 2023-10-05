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
        googleMapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.0991410578313!2d-3.988835522994718!3d47.85704317121395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810d1b5c41bb6c9%3A0x43dd139703276d6f!2sVilla%20des%20Dunes!5e0!3m2!1sfr!2sfr!4v1692545218327!5m2!1sfr!2sfr",
        address: "7 Ham. des Dunes, 29170 Fouesnant",
        // TO CHANGE
        gdfReviewsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=avis&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250",
        // TO CHANGE
        gdfReservationsUrl:
          "https://widget.itea.fr/widget.php?callback=jQuery112303482632914327839_1548135152074&widget=prix&key=FNGF-00MV3EXI&dpt=&langue=FR&numGite=29G17250&codeProd=&iframe=&sansCss=0&ope=&height=&width=&periode=&affichage=&numChambre=&clicsurcalendrier=&nbMois=1&photo=&prix=&text=&affichequenoteglobale=&bureauitea=&avecPrix=&_=1548135152075",
        // TO CHANGE
        gdfWebsite:
          "http://location.gites-finistere.com/resa/etape1.php?ident=gites29_b2015.1.29G17250.G&ope=WEBBZH&ori=WEBBZH&__utma=1.921609988.1436477365.1436477365.1436477365.1&__utmb=1.1.10.1436477365&__utmc=1&__utmx=-&__utmz=1.1436477365.1.1.utmcsr=google%7cutmccn=(organic)%7cutmcmd=organic%7cutmctr=(not%2520provided)&__utmv=-&__utmk=267154190",
      },
      images: {
        presentationCard: "/images/beg-meil/outdoor/picture_2.jpg",
        homeMainPicture: "/images/beg-meil/gallery-preview/outdoor.jpg",
      },
      galleryCategories: {
        outdoor: {
          count: 4,
        },
        "living-room": { count: 4 },
        bathrooms: { count: 2 },
      },
    },
  };
};
