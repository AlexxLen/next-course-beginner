import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const getData = async () => {
  const res = await fetch('nextjs-website-tutorial-cit8kadls-alexxlen.vercel.app/api/posts', {
    next: {
      revalidate: 10
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const metadata = {
  title: 'Blog',
  description: 'Blog of AlexxLen'
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link key={item._id} href={`/blog/${item._id}`}>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image className={styles.img} src={item.img} alt={item.title} fill={true} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.descr}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
