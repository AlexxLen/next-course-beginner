import Button from '@/components/button/Button';
import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'Contact',
  description: 'Contact with AlexxLen'
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='contact' fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='Your Name' className={styles.input} />
          <input type='email' placeholder='Your Email' className={styles.input} />
          <textarea rows={5} placeholder='Your Message' className={styles.textArea} />
          <Button text='Send Message' url='/contact' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
