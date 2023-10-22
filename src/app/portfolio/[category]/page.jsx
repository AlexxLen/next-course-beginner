import Button from '@/components/button/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { items } from './data.js';
import styles from './page.module.scss';

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

export const generateMetadata = ({ params: { category } }) => {
  return {
    title: `Portfolio | ${category}`,
    description: `Portfolio of ${category} of AlexxLen`
  };
};

const Category = ({ params: { category } }) => {
  const data = getData(category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}t</h1>
            <p className={styles.description}>{item.descr}</p>
            <Button text='See More' url='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={item.image} alt='Category Image' fill={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
