import Button from '@/components/button/Button';
import Image from 'next/image';
import Hero from 'public/hero.png';
import styles from './page.module.scss';

export const metadata = {
  title: 'AlexxLen',
  description: 'Home page of AlexxLen'
};

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Better design for your digital products</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text='See Our Works' url='/portfolio' />
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt='hero' className={styles.img} />
        </div>
      </div>
    </>
  );
}
