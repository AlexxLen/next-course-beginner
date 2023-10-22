'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

const Login = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'loading') {
    return <div>Loading...</div>;
  }
  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    signIn('credentials', {
      email: e.target[0].value,
      password: e.target[1].value
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className={styles.input} required />
        <input type='password' placeholder='password' className={styles.input} required />
        <button className={styles.button}>Login</button>
      </form>
      <button
        className={styles.buttonGoogle}
        onClick={() => {
          signIn('google');
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
