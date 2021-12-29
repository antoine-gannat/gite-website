import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  nav: {
    background: "rgba(0, 0, 0, 0.5)",
    maxHeight: "50px",
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
    margin: "auto",
    color: "white",
    ":hover": {
      fontWeight: 600,
    },
  },
  linkWrapper: {
    alignItems: "center",
  },
});
