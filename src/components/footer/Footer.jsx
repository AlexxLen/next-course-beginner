import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div>©2023 AlexLen. All rights reserved.</div>
			<div className={styles.social}>
				<Image src="/1.png" alt="facebook" className={styles.icon} width={15} height={15} />
				<Image src="/2.png" alt="Instagram" className={styles.icon} width={15} height={15} />
				<Image src="/3.png" alt="Twitter" className={styles.icon} width={15} height={15} />
				<Image src="/4.png" alt="Youtube" className={styles.icon} width={15} height={15} />
			</div>
		</footer>
	);
};

export default Footer;
