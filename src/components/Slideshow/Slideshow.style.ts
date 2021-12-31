import { makeStyles } from "@fluentui/react-make-styles";

export const useStyles = makeStyles({
  slideshowWrapper: {
    position: "fixed",
    zIndex: 1031,
    background: "rgba(0,0,0,0.9)",
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
    flexDirection: "column",
  },
  slideshowPreviewImg: {
    margin: "2px",
    width: "150px",
    height: "80px",
    objectFit: "cover",
    opacity: 0.7,
    flexShrink: 0,
    ":hover": {
      opacity: 1,
      cursor: "pointer",
    },
  },
  slideshowPreviewContainer: {
    background: "black",
    width: "90%",
    height: "100px",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
  },
  selected: {
    opacity: "1 !important",
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
    maxHeight: "80%",
    aspectRatio: "16 / 10",
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
