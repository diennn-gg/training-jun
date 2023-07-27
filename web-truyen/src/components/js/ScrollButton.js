import React, {useState, useEffect} from 'react';

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  });

  // window.addEventListener('scroll', toggleVisible);

  return (
    <button className='scroll-button' onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15.8334V4.16675" stroke="#EAFA34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.16675 10.0001L10.0001 4.16675L15.8334 10.0001" stroke="#EAFA34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  );
}

export default ScrollButton;
