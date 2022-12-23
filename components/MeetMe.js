import Image from 'next/image';
import styles from '../styles/Home.module.css';

const MeetMe = () => {
  return (
    <div>
      <Image
        src='https://avatars.githubusercontent.com/u/18216179'
        alt='Rakesh'
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>Rakesh</strong>. I love coding. Writting on Frontend coding practices and styles.
      </p>
    </div>
  );
};

export default MeetMe;
