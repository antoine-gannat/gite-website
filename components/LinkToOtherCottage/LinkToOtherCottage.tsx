import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IComponentBaseProps } from "../types";
import styles from "./LinkToOtherCottage.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function LinkToOtherCottage({
  strings,
  data: { siteName },
}: IComponentBaseProps) {
  const isBegMeil = siteName === "beg-meil";
  const imageUrl = isBegMeil
    ? "/images/kerhere/outdoor/picture_8.jpg"
    : "/images/beg-meil/gallery-preview/outdoor.jpg";

  return (
    <section className={styles.section}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <a href={isBegMeil ? "/kerhere" : "/beg-meil"} className={styles.link}>
          {isBegMeil ? strings.visitKerhere : strings.visitBegMeil}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.linkIcon}
          />
        </a>
      </div>
    </section>
  );
}
