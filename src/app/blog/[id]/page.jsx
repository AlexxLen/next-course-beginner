import Image from 'next/image';
import styles from './page.module.scss';

// const getData = async (id) => {
//   const res = await fetch(`${process.env.NEXT_API_URL}/api/posts/${id}`, {
//     cache: 'no-store'
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params: { id } }) => {
//   const post = await getData(id);
//   return {
//     title: post.title,
//     description: post.descr
//   };
// };

const BlogPost = async ({ params: { id } }) => {
  // const data = await getData(id);
  const data = {};
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.descr}</p>
          </div>
          <div className={styles.author}>
            <Image
              src='https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
              width={40}
              height={40}
              alt='author'
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={data.img} alt={data.img} fill={true} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
