import { FaFacebook, FaTelegram, FaReddit } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState, useEffect } from 'react';
import styles from './MidiasLinks.module.scss';

export default function MidasShare({menuDisplay}) {
  
  const [path, setPath] = useState(null);
  
  useEffect(() => {
    const routerPath = window.location.href;
    setPath(routerPath)
  }, []) 
  
  
  return (
      <div className={styles.midias_area}>
       <div className={styles.share_midias} style={{display: menuDisplay}}>
          <a className={styles.a_link} href={`https://wa.me/?text=${path}`} target="_blank" rel="noopener noreferrer">
            <div className={styles.midia}>
              <IoLogoWhatsapp fill="#25d366" style={{fontSize: '30px', padding: '2px', marginRight: '5px', borderRadius: '0px'}} />
            </div>
          Whatsapp</a>
           <a className={styles.a_link} href={`https://www.facebook.com/sharer/sharer.php?u=${path}`} target="_blank" rel="noopener noreferrer">
            <div className={styles.midia}>
              <FaFacebook fill="#1877f2" style={{fontSize: '30px', padding: '2px', marginRight: '5px', borderRadius: '0px'}} />
            </div>
          Facebook</a>
           <a className={styles.a_link} href={`https://twitter.com/intent/tweet?url=${path}`}  target="_blank" rel="noopener noreferrer">
            <div className={styles.midia}>
              <AiFillTwitterCircle color="#1da1f2" style={{ fontSize: '32px', padding: '2px', marginRight: '5px', borderRadius: '0px'}} />
            </div>
          Twitter</a>
           <a className={styles.a_link} href={`https://reddit.com/submit?url=${path}`}  target="_blank" rel="noopener noreferrer">
            <div className={styles.midia}>
              <FaReddit color="#ff4500" style={{ fontSize: '30px', padding: '2px', marginRight: '5px', borderRadius: '0px'}} />
            </div>
          Reddit</a>
           <a className={styles.a_link} href={`https://telegram.me/share/url?url=${path}`} target="_blank" rel="noopener noreferrer">
            <div className={styles.midia}>
              <FaTelegram color="#0088cc" style={{ fontSize: '30px', padding: '2px', marginRight: '5px', borderRadius: '0px'}} />
            </div>
          Telegram</a>
      </div>
    </div>
  )
}