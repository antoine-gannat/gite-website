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
      siteName: "kerhere",
    },
  };
};
