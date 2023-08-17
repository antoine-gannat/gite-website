import { ILocalizationProps } from "@/utils/localization/localization";
export interface IComponentBaseProps extends ILocalizationProps {
  data: {
    siteName: "beg-meil" | "kerhere";
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
  };
}
