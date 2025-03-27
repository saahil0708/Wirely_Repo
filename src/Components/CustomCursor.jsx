import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Cursor
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <FlashIcon />
    </Cursor>
  );
};

// Styled components
const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  will-change: transform;
`;

const FlashIcon = styled.div`
  width: 20px;
  height: 32px;
  background: #FFD700;
  clip-path: polygon(25% 0%, 95% 58%, 57% 60%, 75% 100%, 16% 48%, 48% 46%);
  );
  filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.7));
`;

export default CustomCursor;