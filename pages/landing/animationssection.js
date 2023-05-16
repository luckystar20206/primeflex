import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
const AnimationsSection = ({ dark }) => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(null);
    const sectionRef = useRef(null);

    const [finishedAnimating, setFinishedAnimating] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        setFinishedAnimating([]);
                    } else {
                        setVisible(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animationClass = (baseClass, index) => {
        return (visible || hovered === index) && !finishedAnimating.includes(index) ? `${baseClass} animation-duration-1000` : '';
    };

    const handleMouseEnter = (index) => {
        setHovered(index);
        setFinishedAnimating((prev) => prev.filter((item) => item !== index));
    };

    const handleMouseLeave = (index) => {
        setHovered(null);
    };

    const handleAnimationEnd = (index) => {
        setFinishedAnimating((prev) => [...prev, index]);
    };

    return (
        <section ref={sectionRef} className="landing-animations-section relative">
            <div className="landing-animations-container  py-8 px-5 relative z-5 flex flex-column gap-5 flex-shrink-0 justify-content-center align-items-center ">
                {dark && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="your-custom-class md:w-7 w-full md:mt-0 -mt-6"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '34%',
                            objectFit: 'cover',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '-1',
                            opacity: '0.5'
                        }}
                    >
                        <source src="/images/landing/Eclipse_18.webm" type="video/webm" />
                    </video>
                )}
                {!dark && (
                    <div className="bg-animations-wrapper flex justify-content-center align-items-center">
                        <span className="bg-animations bg-1"></span>
                        <span className="bg-animations bg-2"></span>
                    </div>
                )}
                <div className="landing-animations-cards flex gap-5 md:flex-row flex-column justify-content-center mt-8 mx-auto" style={{ height: '318px', width: '512px' }}>
                    <div className="flex flex-row md:flex-column gap-5 w-full">
                        <div
                            className={`animation-card flex justify-content-center align-items-center w-full  font-semibold text-xl p-6 cursor-normal ${animationClass('fadeindown', 4)}`}
                            onMouseEnter={() => handleMouseEnter(4)}
                            onMouseLeave={() => handleMouseLeave(4)}
                            onAnimationEnd={() => handleAnimationEnd(4)}
                            style={{ minHeight: '123px' }}
                        >
                            fadeindown
                        </div>

                        <div
                            className={`animation-card flex justify-content-center align-items-center h-full w-full  font-semibold text-xl p-6 cursor-normal ${animationClass('fadeinup', 3)}`}
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}
                            onAnimationEnd={() => handleAnimationEnd(3)}
                            style={{ minHeight: '174px' }}
                        >
                            fadeinup
                        </div>
                    </div>

                    <div
                        className={`animation-card h-full hidden md:flex justify-content-center align-items-center w-full font-semibold text-xl p-6 cursor-normal ${animationClass('flipright', 2)}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        onAnimationEnd={() => handleAnimationEnd(2)}
                        style={{ minHeight: '174px' }}
                    >
                        flipright
                    </div>
                    <div className="flex  gap-5 w-full flex-row md:flex-column">
                        <div
                            className={`animation-card flex justify-content-center align-items-center h-full w-full  font-semibold text-xl p-6 cursor-normal ${animationClass('scalein', 1)}`}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            onAnimationEnd={() => handleAnimationEnd(1)}
                            style={{ minHeight: '174px' }}
                        >
                            scalein
                        </div>
                        <div
                            className={`animation-card flex justify-content-center align-items-center h-full w-full  font-semibold text-xl p-6 cursor-normal ${animationClass('zoomindown', 0)}`}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                            onAnimationEnd={() => handleAnimationEnd(0)}
                            style={{ minHeight: '123px' }}
                        >
                            zoomindown
                        </div>
                    </div>
                </div>
                <div className="landing-animations-content flex flex-column justify-content-center align-items-center text-center z-5 relative gap-5">
                    <h1 className="landing-animations-title font-bold m-0 text-6xl md:text-7xl">Animation</h1>
                    <h3 className="landing-animations-subtitle m-0 text-xl md:text-2xl font-normal text-center">
                        Unlock consistency and flexibility in your designs with our collection of pre-built components and utility classes, designed to work seamlessly across all screen sizes.
                    </h3>
                    <Link href="/installation" className="linkbox-button active w-9rem fadeinleft animation-duration-2000 animation-ease-out text-700">
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AnimationsSection;
