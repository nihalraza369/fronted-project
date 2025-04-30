'use client';
import Image from 'next/image';
import styles from '@/styles/ProfileImage.module.css';

const ProfileImage = () => {
  return (
    <div className={styles.container}>
      {/* Top Background Logos */}
      <div className={styles.topLogos}>
        <Image src="/ai.png" alt="Python" width={50} height={50} className={styles.logo} />
        <Image src="/ai.png" alt="HTML" width={50} height={50} className={styles.logo} />
      </div>
      
      {/* Main Profile Image */}
      <div className={styles.profileImage}>
        <Image src="/nihal.png" alt="Profile Picture" width={200} height={200} className={styles.mainImage} />
      </div>
      
      {/* Bottom Background Logos */}
      <div className={styles.bottomLogos}>
        <Image src="/ai.png" alt="CSS" width={50} height={50} className={styles.logo} />
        <Image src="/ai.png" alt="AI" width={50} height={50} className={styles.logo} />
      </div>
    </div>
  );
};

export default ProfileImage;

