import styles from "./page.module.css";
import Topbar from "./components/Topbar/topbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Topbar />
    </div>
  );
}
