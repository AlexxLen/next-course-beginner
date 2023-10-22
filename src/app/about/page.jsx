import Button from '@/components/button/Button';
import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'About',
  description: 'About of us'
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://i.pinimg.com/564x/7b/4a/9e/7b4a9e6368a9e068658bd9b87951a31f.jpg'
          alt=''
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgSubtitle}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus sed eius
            distinctio ea repellat, exercitationem quisquam sapiente laudantium nulla ullam
            cupiditate quo. At corrupti voluptatibus amet consequatur. Ad eligendi aperiam provident
            velit quia repudiandae asperiores, in rerum modi ipsum quae vero omnis dolores eaque,
            eius nemo impedit, iusto saepe doloribus ab laboriosam quisquam commodi quo. Fuga
            <br />
            <br />
            Et suscipit doloremque cum impedit sint at nam quos nihil sapiente velit. Molestias,
            assumenda nihil eligendi a ab cupiditate quibusdam eos nobis repellendus delectus fugit
            architecto ad neque laborum reiciendis, impedit minus commodi! Quas sed omnis ducimus a
            eaque, nobis asperiores est optio esse, alias soluta quis reiciendis magni obcaecati
            dolorem ipsum nam mollitia maiores, voluptate voluptatibus nihil! Architecto, magnam
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus sed eius
            distinctio ea repellat, exercitationem quisquam sapiente laudantium nulla ullam
            cupiditate quo. At corrupti voluptatibus amet consequatur. Ad eligendi aperiam provident
            velit quia repudiandae asperiores, in rerum modi ipsum quae vero omnis dolores eaque,
            eius nemo impedit, iusto saepe doloribus ab laboriosam quisquam commodi quo. Fuga
            corporis quia recusandae non provident aspernatur modi expedita ea quidem.
            <br />
          </p>
          <ul>
            <li>- Lorem ipsum dolor sit amet</li>
            <li>- Lorem ipsum dolor sit amet</li>
            <li>- Lorem ipsum dolor sit amet</li>
          </ul>
          <Button text='Contanct' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
