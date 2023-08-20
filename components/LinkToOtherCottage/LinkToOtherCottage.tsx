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
      <a
        className={styles.container}
        href={isBegMeil ? "/kerhere" : "/beg-meil"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.link}>
          {isBegMeil ? strings.visitKerhere : strings.visitBegMeil}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className={styles.linkIcon}
          />
        </div>
      </a>
    </section>
  );
}
