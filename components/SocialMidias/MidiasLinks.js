import styled, { ThemeContext } from 'styled-components';
import { FaFacebook, FaTelegram, FaReddit } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useState, useEffect } from 'react';

  const MidiasArea = styled.div`
     position: absolute;
     margin: auto;
     display: flex;
     top: 55px;
     right: 0;
     justify-content: right;
  `;
  
const ShareMidias = styled.div`
      min-width: 100px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: none;
      position: relative;
      z-index: 2;
      flex-direction: column;
      padding: 10px;
  `;
  
  const Midia = styled.div`
      background-color: white;
      display: flex;
      flex-direction: inline;
      align-items: center;
  `;
  
  const A = styled.a`
    margin: 10px 4px 10px 1px;
    text-decoration: none;
    display: flex;
    flex-direction: inline;
    align-items: center;
    color: ${props => props.theme.colors.fontP};
    &:hover {
      text-decoration: underline;
    }
  `;
  
export default function MidasShare({menuDisplay}) {
  
  const [path, setPath] = useState(null);
  
  useEffect(() => {
    const routerPath = window.location.href;
    setPath(routerPath)
  }, []) 
  
  
  return (
      <MidiasArea>
       <ShareMidias style={{display: menuDisplay}}>
          <A href={`https://wa.me/?text=${path}`} target="_blank" rel="noopener noreferrer">
            <Midia>
              <IoLogoWhatsapp color='#25d366' style={{ fontSize: '30px', marginRight: '5px'}} />
            </Midia>
          Whatsapp</A>
           <A href={`https://www.facebook.com/sharer/sharer.php?u=${path}`} target="_blank" rel="noopener noreferrer">
            <Midia>
              <FaFacebook color="#1877f2" style={{ fontSize: '30px', marginRight: '5px'}} />
            </Midia>
          Facebook</A>
           <A href={`https://twitter.com/intent/tweet?url=${path}`}  target="_blank" rel="noopener noreferrer">
            <Midia>
              <AiFillTwitterCircle color="#1da1f2" style={{ fontSize: '30px', marginRight: '5px'}} />
            </Midia>
          Twitter</A>
           <A href={`https://reddit.com/submit?url=${path}`}  target="_blank" rel="noopener noreferrer">
            <Midia>
              <FaReddit color="#ff4500" style={{ fontSize: '30px', marginRight: '5px'}} />
            </Midia>
          Reddit</A>
           <A href={`https://telegram.me/share/url?url=${path}`} target="_blank" rel="noopener noreferrer">
            <Midia>
              <FaTelegram color="#0088cc" style={{ fontSize: '30px', marginRight: '5px'}} />
            </Midia>
          Telegram</A>
      </ShareMidias>
    </MidiasArea>
  )
}