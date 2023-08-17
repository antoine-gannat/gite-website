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
      siteName: "beg-meil",
    },
  };
};
