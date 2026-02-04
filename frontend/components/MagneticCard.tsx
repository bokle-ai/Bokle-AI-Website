import React, { useRef, useState } from 'react';

interface MagneticCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticCard: React.FC<MagneticCardProps> = ({ children, className = "", onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glow, setGlow] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation (max 15 degrees)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Inverted for natural tilt
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });

        // Calculate glow position as percentage
        setGlow({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setGlow({ x: 50, y: 50 });
    };

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-all duration-200 ease-out will-change-transform ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
                transformStyle: 'preserve-3d',
            }}
        >
            <div
                className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-[inherit]"
                style={{
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(0, 255, 65, 0.15), transparent 60%)`
                }}
            ></div>
            <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </div>
    );
};

export default MagneticCard;
