import { Strings } from "./strings.types.generated";

export type ILocalizedStrings = Record<Strings, string> &
  Record<string, string>;
export type Locale = "en" | "fr";

export const localizedStrings: Record<Locale, ILocalizedStrings> = {
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

    // To remove
    json: "",

    // poolAlt: "Piscine",
    // diningRoomAlt: "Séjour",
    // bedrooms: "Chambres",
    // bedroomAlt: "Chambre",
    // outdoorAlt: "Exterieur",
    // kitchenAlt: "Cuisine",
    // environmentAlt: "Environnement",
    // contact_info: "Contactez nous",
    // loading: "Chargement",
  },
  en: {
    // meta tags
    pageDescription:
      "Holliday cottage with and indoor swimming pool in Brittany, France. Perfect for a familly vacation. Can receive up to 6 peoples.",
    pageTitle: "Cotage with indoor Pool in Brittany | Gîte Kerhéré",
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

    // To remove
    json: "",
    // poolAlt: "Swimming Pool",
    // diningRoomAlt: "Dining room",
    // bedrooms: "Bedrooms",
    // bedroomAlt: "Bedroom",
    // outdoorAlt: "Outdoor",
    // kitchenAlt: "Kitchen",
    // environmentAlt: "Environment",
    // contact_info: "Contact us",
    // loading: "Loading",
  },
};
