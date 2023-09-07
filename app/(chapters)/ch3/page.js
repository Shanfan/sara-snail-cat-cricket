'use client'
import { Sedgwick_Ave } from 'next/font/google';

import chapters from "@/util/chapterInfo";
import ChapterHeader from "@/util/ChapterHeader";
import Announcement from '@/util/Announcement';
import { useRef, useEffect } from 'react';

const sedgwick = Sedgwick_Ave({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export default function Ch3() {
    return (
        <>
            <div className='row white'>
                <ChapterHeader
                    currentChapter={chapters.three}
                    style="chapterHeader"
                />
            </div>
            <article className={sedgwick.className}>
                <div className='row wide black'>
                    <Canvas />
                </div>
            </article>
            <Announcement />
        </>
    );
}



// Testing Canvas 
function Canvas() {
    const size = { width: 600, height: 250 };
    const canvasRef = useRef(null);
    const requestIDRef = useRef(null); // used for garbage collection
    const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 });

    const updateBall = () => {
        const ball = ballRef.current;
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x + ball.radius >= size.width) {
            ball.vx = -ball.vx;
            ball.x = size.width - ball.radius;
        }
        if (ball.x - ball.radius <= 0) {
            ball.vx = -ball.vx;
            ball.x = ball.radius;
        }
        if (ball.y + ball.radius >= size.height) {
            ball.vy = -ball.vy;
            ball.y = size.height - ball.radius;
        }
        if (ball.y - ball.radius <= 0) {
            ball.vy = -ball.vy;
            ball.y = ball.radius;
        }
    };


    const renderFrame = () => {
        const ctx = canvasRef.current.getContext("2d");
        updateBall();
        frameRenderer.call(ctx, size, ballRef.current);

    }

    const tick = () => {
        if (!canvasRef.current) return;
        renderFrame()
        requestAnimationFrame(tick);

        requestIDRef.current = requestAnimationFrame(tick);
    }

    useEffect(() => {
        requestIDRef.current = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(requestIDRef.current);
        }
    }, []);

    return <canvas {...size} ref={canvasRef} />
}

function frameRenderer(size, ball) {
    this.clearRect(0, 0, size.width, size.height);

    const drawCircle = (x, y, radius, color, alpha) => {
        this.save();
        this.beginPath();
        this.arc(x, y, radius, 0, Math.PI * 2);
        this.fillStyle = color;
        this.globalAlpha = alpha;
        this.fill();
        this.closePath();
        this.restore();
    };

    drawCircle(ball.x, ball.y, ball.radius, "#fff");
}

