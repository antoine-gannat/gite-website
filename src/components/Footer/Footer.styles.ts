import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  footer: {
    position: "absolute",
    background: "rgb(238, 238, 238)",
    width: "100%",
    height: "350px",
    paddingTop: "10px",
    marginTop: "100px",
    "& a": {
      color: "rgb(185, 2, 17)",
    },
  },
  ul: {
    listStyle: "none",
    fontSize: "20px",
    "& li": {
      marginTop: "5px",
      textAlign: "center",
      fontSize: "20px",
    },
  },
  copyright: {
    position: "absolute",
    right: "10px",
    bottom: "5px",
    margin: 0,
  },
});
