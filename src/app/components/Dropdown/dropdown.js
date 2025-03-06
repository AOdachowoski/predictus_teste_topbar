import Image from "next/image";
import styles from "./dropdown.module.scss";

export default function Dropdown({
  items,
  subItems,
  pageSelected,
  setPageSelected,
}) {
  return (
    <div className={styles.dropdown}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.dropdownItem} ${
            pageSelected.text === item.text ? styles.selected : ""
          }`}
          onClick={() => setPageSelected(item)}
        >
          <Image src={item.icon} alt={item.text} width={24} height={24} />
          <span
            className={`${styles.text} ${
              pageSelected.text === item.text ? styles.selectedText : ""
            }`}
          >
            {item.text}
          </span>
        </div>
      ))}

      {subItems && (
        <>
          <div className={styles.lineBottom}></div>
          {subItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.dropdownItem} ${
                pageSelected.text === item.text ? styles.selected : ""
              }`}
              onClick={() => setPageSelected(item)}
            >
              <Image src={item.icon} alt={item.text} width={24} height={24} />
              <span
                className={`${styles.textSub} ${
                  pageSelected.text === item.text ? styles.selectedTextSub : ""
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
