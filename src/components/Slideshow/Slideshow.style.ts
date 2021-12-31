import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  slideshowWrapper: {
    position: "fixed",
    zIndex: 1031,
    background: "rgba(0,0,0,0.7)",
    top: 0,
    left: "0",
    width: "100%",
    height: "100%",
  },
  slideshow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leaveButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    border: "none",
    background: "transparent",
    color: "white",
    fontSize: "30px",
  },
  slideshowImage: {
    objectFit: "cover",
    width: "100%",
    padding: "3px",
    maxHeight: "90%",
  },
  navButton: {
    background: "transparent",
    border: "none",
    width: "50px",
    fontSize: "40px",
    color: "white",
    position: "absolute",
  },
  leftNav: {
    left: "4px",
  },
  rightNav: {
    right: "4px",
  },
});
