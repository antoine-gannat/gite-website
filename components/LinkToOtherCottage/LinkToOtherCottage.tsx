import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IComponentBaseProps } from "../types";
import styles from "./LinkToOtherCottage.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { Container } from "react-bootstrap";

export function LinkToOtherCottage({
  strings,
  data: { siteName },
}: IComponentBaseProps) {
  const isBegMeil = siteName === "beg-meil";
  const imageUrl = isBegMeil
    ? "/images/kerhere/outdoor/picture_8.jpg"
    : "/images/beg-meil/gallery-preview/outdoor.jpg";

  return (
    <section>
      <Container className={styles.section}>
        <div>
          <CategoryTitle
            title={
              siteName === "beg-meil"
                ? strings.visitKerhere
                : strings.visitBegMeil
            }
          />
          <a
            className={styles.container}
            href={isBegMeil ? "/kerhere" : "/beg-meil"}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className={styles.link}>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.linkIcon}
              />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
