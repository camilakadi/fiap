import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image
          src="./svgs/logo-fiap.svg"
          alt="FIAP"
          width={144}
          height={39}
          priority
        />
      </div>
    </header>
  );
}
