import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  nav: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  flag: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    opacity: 0.5,
    padding: "8px",
    ":focus": {
      outline: "none",
    },
  },
  selected: {
    opacity: 1,
  },
  link: {
    opacity: 0.5,
    margin: "auto",
    color: "white",
  },
  linkWrapper: {
    alignItems: "center",
  },
});
