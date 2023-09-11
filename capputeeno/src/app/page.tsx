import { FilterBar } from "@/components/FilterBar";
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  )
}

export default Home;