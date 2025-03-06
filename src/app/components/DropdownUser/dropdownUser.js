import Image from "next/image";
import styles from "./dropdownUser.module.scss";

export default function DropdownUser({ items, width }) {
  return (
    <div className={styles.dropdownUser}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.dropdownItem}
          style={{ minWidth: width }}
        >
          <Image src={item.icon} alt="menu" width={24} height={24} />
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
