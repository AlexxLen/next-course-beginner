'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import styles from './Navbar.module.scss';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  }
];

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();
  return (
    <header>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          AlexLen
        </Link>
        <nav>
          <ul className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={pathname === link.url ? styles.activeLink : styles.link}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {session.status === 'authenticated' && (
              <button onClick={() => signOut()} className={styles.logout}>
                Logout
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
