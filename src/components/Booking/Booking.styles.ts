import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  bookingContainer: {
    padding: "10px",
  },
  monthsTabNavBtn: {
    color: "rgb(185, 2, 17)",
    ":hover": {
      "-webkit-box-shadow": "0px 0px 1px 0px rgba(0, 0, 0, 0.75)",
      "-moz-box-shadow": "0px 0px 1px 0px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.75)",
      background: "rgb(185, 2, 17)",
      color: "white",
      fontWeight: "bold",
    },

    ":focus": {
      outline: "none !important",
      boxShadow: "none",
    },
  },
  hidden: {
    opacity: 0,
  },
  month: {
    "@media screen and (max-width: 940px)": {
      display: "flex",
      justifyContent: "center",
    },
    padding: "0",
    paddingInlineStart: "0",
  },
  week: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "5px",
    width: "250px",
    height: "150px",
    listStyle: "none",
    border: "1px solid black",
  },
  date: {
    width: "100%",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "20px",
  },
  price: {
    textAlign: "center",
    fontSize: "25px",
  },
  available: {
    ":hover": {
      "-webkit-box-shadow": "0px 0px 3px 0px rgba(0, 0, 0, 0.75)",
      "-moz-box-shadow": "0px 0px 3px 0px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.75)",
    },
    "& p": {
      color: "green",
    },
  },
  monthHeading: {
    textAlign: "center",
  },
  notAvailable: {
    "& p": {
      color: "red",
    },
    ":hover": {
      cursor: "default",
    },
  },
});
