'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import styles from './page.module.scss';

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session.data?.user?.name}`,
    fetcher
  );

  if (session.status === 'loading') {
    return <div>Loading...</div>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const descr = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          descr,
          img,
          content,
          username: session.data.user.name
        })
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this post?') === false) {
      return;
    }
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      mutate();
    } catch (error) {
      logger.log(error);
    }
  };

  const content =
    data?.length > 0 ? (
      data?.map((post) => (
        <div key={post._id} className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={post.img} alt={post.title} fill={true} className={styles.img} />
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <button onClick={() => handleDelete(post._id)} className={styles.delete}>
            X
          </button>
        </div>
      ))
    ) : (
      <div>
        <h2>No Posts</h2>
        <p> You have no posts yet.</p>
      </div>
    );

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>{isLoading ? <div>Loading...</div> : content}</div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input type='text' placeholder='Description' className={styles.input} />
          <input
            type='text'
            placeholder='Only an image URL from Pinterest'
            className={styles.input}
          />
          <textarea rows={5} placeholder='Content' className={styles.textarea} />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
