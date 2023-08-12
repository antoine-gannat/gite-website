import { Strings } from "./strings.types.generated";

export type ILocalizedStrings = Record<Strings, string> &
  Record<string, string>;
export type Locale = "en" | "fr";

export const localizedStrings: Record<Locale, Record<Strings, string>> = {
  fr: {
    // meta tags
    pageDescription:
      "Location de vacances avec piscine intérieure chauffée en Bretagne. Gîte pouvant accueillir jusqu'a 6 personnes.",
    pageTitle: "Gîte avec Piscine intérieur en Bretagne | Gîte Kerhéré",

    // index
    title: "Gîte Kerhéré",
    subtitle: "Entre Terre et Mer",
    booking: "Réserver un sejour",

    // navbar
    homeLink: "Accueil",
    bookingLink: "Réservation",
    galleryLink: "Photos",
    reviewsLink: "Avis",
    directionsLink: "Itineraire",
    ENFlagAlt: "Drapeau Français",
    FRFlagAlt: "Drapeau Anglais",
    toggleNav: "Ouvrir le menu",

    // misc
    loading: "Chargement",

    // additional information
    bedrooms: "Chambres",
    additionalInformation: "Information complémentaire",
    capacity: "Capacité",
    peoples: "personnes",
    included: "Inclus",
    surface: "Superficie",
    beds: "Nombre de lits",
    bedsCountDescription: "Deux lits double et 2 lits simple",

    // booking
    unavailable: "Indisponible",
    fortnightOnly: "Quinzaine uniquement",
    GDFWebsite: "Voir le site de Gîte de France",
    next: "Suivant",
    prev: "Précedent",
    january: "Janvier",
    february: "Février",
    march: "Mars",
    april: "Avril",
    may: "Mai",
    june: "Juin",
    july: "Juillet",
    august: "Août",
    september: "Septembre",
    october: "Octobre",
    november: "Novembre",
    december: "Décembre",

    // footer
    contactInfo: "Contactez nous",
    clickToCall: "Cliquez pour nous appeller",
    gotoFb: "Notre page Facebook",
    gotoInsta: "Notre compte Instagram",

    // gallery
    gallery: "Photos",
    clickForMore: "Cliquez sur une catégorie pour voir d'autre photos.",

    // map
    directions: "Itinéraire vers le Gîte",

    // presentation card
    presentationTitle: "Gîte avec piscine intérieure en Bretagne",
    presentationText:
      "Gîte indépendant avec piscine intérieure, exposé sud, situé entre Quimper et Châteaulin. Idéal pour une remise en forme dans un cadre verdoyant et vallonné, au pied des Montagnes Noires.",
    giteEpis: "Gîte 4 epis",
    pool: "Piscine",

    // reviews
    reviews: "Avis",
    more: "Plus",
    on: "Publié le",
  },
  en: {
    // meta tags
    pageDescription:
      "Holiday cottage with and indoor swimming pool in Brittany, France. Perfect for a family vacation. Can receive up to 6 peoples.",
    pageTitle: "Cottage with indoor Pool in Brittany | Gîte Kerhéré",
    // index page
    title: "Gîte Kerhéré",
    subtitle: "Between Land and Sea",
    booking: "Book a stay",
    // Navbar
    homeLink: "Home",
    bookingLink: "Booking",
    galleryLink: "Pictures",
    reviewsLink: "Reviews",
    directionsLink: "Directions",
    ENFlagAlt: "England flag",
    FRFlagAlt: "French flag",
    toggleNav: "Open menu",

    // misc
    loading: "Loading",

    // additional information
    bedrooms: "Bedrooms",
    additionalInformation: "Additional information",
    capacity: "Capacity",
    peoples: "peoples",
    included: "Included",
    surface: "Surface",
    beds: "Number of beds",
    bedsCountDescription: "2 queen size and 2 twin size",

    // booking
    unavailable: "Not available",
    fortnightOnly: "Fortnight only",
    GDFWebsite: "See Gîte de France website",
    next: "Next",
    prev: "Previous",
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",

    // footer
    contactInfo: "Contact us",
    clickToCall: "Click to call",
    gotoFb: "Our Facebook page",
    gotoInsta: "Our Instagram account",

    // gallery
    gallery: "Pictures",
    clickForMore: "Click on a picture for more.",

    // map
    directions: "Directions to the Cottage",

    // presentation card
    presentationTitle: "Cottage with indoor pool in Brittany",
    presentationText:
      "Independent cottage with indoor swimming pool, facing south between Quimper and Châteaulin. Ideal for a relaxing stay in the country side surrounded by a peaceful nature.",
    giteEpis: "4 cob cottage",
    pool: "Pool",

    // reviews
    reviews: "Reviews",
    more: "More",
    on: "Published on",
  },
};
