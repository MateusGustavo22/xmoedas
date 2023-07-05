import { FaFacebook, FaTelegram, FaReddit } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState, useEffect } from 'react';

export default function MidasShare({ menuDisplay }) {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const routerPath = window.location.href;
    setPath(routerPath);
  }, []);

  return (
    <div
      className="absolute right-0 top-[62px] z-50 m-auto flex rounded-[4px] bg-white p-2 shadow-3xl"
      style={{ display: menuDisplay }}
    >
      <div className="relative flex min-w-[100px] flex-col gap-3">
        <a
          className="flex items-center rounded-lg p-1 hover:bg-gray-200"
          href={`https://wa.me/?text=${path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp
            fill="#25d366"
            style={{
              fontSize: '30px',
              padding: '2px',
              marginRight: '5px',
              borderRadius: '0px',
            }}
          />
          Whatsapp
        </a>
        <a
          className="flex items-center rounded-lg p-1 hover:bg-gray-200"
          href={`https://www.facebook.com/sharer/sharer.php?u=${path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            fill="#1877f2"
            style={{
              fontSize: '30px',
              padding: '2px',
              marginRight: '5px',
              borderRadius: '0px',
            }}
          />
          Facebook
        </a>
        <a
          className="flex items-center rounded-lg p-1 hover:bg-gray-200"
          href={`https://twitter.com/intent/tweet?url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle
            color="#1da1f2"
            style={{
              fontSize: '32px',
              padding: '2px',
              marginRight: '5px',
              borderRadius: '0px',
            }}
          />
          Twitter
        </a>
        <a
          className="flex items-center rounded-lg p-1 hover:bg-gray-200"
          href={`https://reddit.com/submit?url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReddit
            color="#ff4500"
            style={{
              fontSize: '30px',
              padding: '2px',
              marginRight: '5px',
              borderRadius: '0px',
            }}
          />
          Reddit
        </a>
        <a
          className="flex items-center rounded-lg p-1 hover:bg-gray-200"
          href={`https://telegram.me/share/url?url=${path}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="">
            <FaTelegram
              color="#0088cc"
              style={{
                fontSize: '30px',
                padding: '2px',
                marginRight: '5px',
                borderRadius: '0px',
              }}
            />
          </div>
          Telegram
        </a>
      </div>
    </div>
  );
}
