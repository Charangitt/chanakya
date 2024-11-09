import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [cursorStyle, setCursorStyle] = useState({
        left: '0px',
        top: '0px',
        display: 'none',
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorStyle({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`,
                display: 'block',
            });
        };

        const handleMouseLeave = () => {
            setCursorStyle({ display: 'none' });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                position: 'fixed',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                zIndex:999,
                // background: 'linear-gradient(to right, #76ff7a 50%, #388e3c 50%)',
                background: 'radial-gradient(circle, #76ff7a, #388e3c)',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                ...cursorStyle,
            }}
        />
    );
};

export default Cursor;
