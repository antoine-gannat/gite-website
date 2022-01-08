import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  review: {
    marginBottom: "20px",
  },
  reviewInfo: {
    position: "relative",
  },

  date: {
    position: "absolute",
    right: "10px",
    top: "0",
  },
  moreBtn: {
    color: "white",
    background: "rgb(185, 2, 17)",
    "-webkit-box-shadow": "0px 2px 13px -6px rgba(0, 0, 0, 0.75)",
    "-moz-box-shadow": "0px 2px 13px -6px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 2px 13px -6px rgba(0, 0, 0, 0.75)",
    ":hover": {
      color: "rgb(233, 233, 233)",
    },
  },
  rating: {
    color: "rgb(151, 1, 14)",
  },
  reviewTitle: {
    textAlign: "center",
    fontSize: "22px",
    textDecoration: "underline",
  },
});
