import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='max-width-container'>
        <h2>
          <Link href='/'>JS Blogs</Link>
        </h2>
        <ul>
          {/* <li>
            <Link href='https://github.com/rake7h'>
              GitHub
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
