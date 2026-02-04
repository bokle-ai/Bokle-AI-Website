import React, { useState, useEffect, useRef } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<number | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setDisplayText(prev =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            className={`inline-block w-full ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};

export default GlitchText;
