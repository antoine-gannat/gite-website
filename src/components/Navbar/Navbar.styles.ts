import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  nav: {
    background: "rgba(0, 0, 0, 0.5)",
    maxHeight: "50px",
  },
  toggler: {
    "@media (min-width: 768px)": {
      display: "none",
    },
    color: "white",
    background: "transparent",
    border: "none",
  },
  expanded: {
    display: "initial !important",
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  navItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none",
      flexDirection: "column",
      position: "fixed",
      top: "50px",
      left: 0,
      width: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      textAlign: "center",
    },
    "& a": {
      padding: ".5rem",
    },
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
});
