import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  card: {
    position: "relative",
    height: "auto",
    padding: "5px 10px",
    top: "-100px",
    backgroundColor: "rgb(255, 255, 255)",
    "-webkit-box-shadow": "0px 0px 44px -29px rgba(0, 0, 0, 0.75)",
    "-moz-box-shadow": "0px 0px 44px -29px rgba(0, 0, 0, 0.75)",
    boxShadow: "0px 0px 44px -29px rgba(0, 0, 0, 0.75)",
  },
  cardContent: {
    paddingBottom: "5px",
  },
  cardTitle: {
    textAlign: "center",
    paddingTop: "1em",
  },
  cardText: {
    width: "70%",
    margin: "auto",
    padding: "15px",
    textAlign: "center",
    fontSize: "20px",
  },
  award: {
    maxWidth: "150px",
  },
  awardWrapper: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    maxHeight: "400px",
    maxWidth: "100%",
  },
});
