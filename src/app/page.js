import Image from 'next/image'
import styles from './page.module.css'
import ProfileCard from './ProfileCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileCard />
    </main>
  )
}
