import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  galleryItem: {
    marginTop: "3px",
    padding: "2px",
    "& img": {
      width: "100%",
    },
    ":hover": {
      cursor: "pointer",
    },
  },
  helper: {
    textAlign: "center",
  },
});
