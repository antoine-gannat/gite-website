import { ILocalizationProps } from "@/utils/localization/localization";

export type SiteName = "beg-meil" | "kerhere";

export type GalleryCategoryMap = Record<string, { count: number }>;
export interface IComponentBaseProps extends ILocalizationProps {
  data: {
    siteName: SiteName;
    // google map embedded url
    googleMapUrl: string;
    // address of the cottage
    address: string;
    // url used to fetch the reviews
    gdfReviewsUrl: string;
    // url used to fetch the reservations
    gdfReservationsUrl: string;
    // url to the gite de france website for manual reservation
    gdfWebsite: string;
    // ID of the gite
    giteId: string;
  };
  images: {
    presentationCard: string;
    homeMainPicture: string;
  };
  galleryCategories: GalleryCategoryMap;
}
