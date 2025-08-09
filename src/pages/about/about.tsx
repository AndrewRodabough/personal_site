import React from 'react';
import './about.css';
import Mountians from '../../components/mountains/mountains';
import NavBar from '../../components/navbar/navbar';

const About: React.FC = () => {
    return (
        <>
            <NavBar
                title={<h1>Andrew Rodabough</h1>}
                items={[
                    { label: 'Overview', href: '#about' },
                    { label: 'Ballroom', href: '#ballroom' },
                    { label: 'Art', href: '#art' },
                    { label: 'Cooking', href: '#cooking' },
                    { label: 'Coding', href: '#coding' },
                ]}
            />
            <Mountians />
            <main>
                <section className="about-me" id="about">
                    <section className="profile">
                        <section className="left">
                            <img
                                src="/self.jpg"
                                alt="Andrew Rodabough"
                                className="profile-image"
                            />
                        </section>
                        <section className="right">
                            <div>
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    Hi, I'm Andrew Rodabough,
                                </p>
                                <p>
                                    I live in Provo Utah. Currently I am a senior currently
                                    pursuing a Bachelors in Computer Science at Brigham Young University.
                                    In my free time, I enjoy working on personal projects, ballroom dancing, art, and Cooking.
                                </p>
                            </div>
                        </section>
                    </section>
                    {/* Image Gallery Carousel */}
                    <section className="gallery-section">
                        <h2>Gallery</h2>
                        <ImageCarousel />
                    </section>
                    <section className="idk">
                        <h2 id="ballroom">Ballroom</h2>
                        <p>For the last 3 years I have been immersed in the world of ballroom dancing. I dance as a member of BYU's ballroom dance company</p>
                        <h2 id="art">Art</h2>
                        <p>I love art in just about any form. Some of my favorite art mediums, include 3D modeling, painting, sketching, and other crafts</p>
                        <h2 id="cooking">Cooking</h2>
                        <p>le cooking</p>
                        <h2 id="coding">Coding</h2>
                        <p>I am Graduating with my degree in computer science. I like making games</p>
                    </section>
                </section>
            </main>

        {/* ImageCarousel component definition */}
        </>
    );
};

// Simple image carousel component
const images = [
    '/assignment.jpg',
    '/billing.jpg',
    '/portfolio.jpg',
    '/portfolio copy.jpg',
    '/portfolio copy 2.jpg',
    '/portfolio copy 3.jpg',
    '/portfolio copy 4.jpg',
    '/portfolio copy 5.jpg',
    '/portfolio copy 6.jpg',
    '/self.jpg',
];

const ImageCarousel: React.FC = () => {
    const [scrollIndex, setScrollIndex] = React.useState(0);
    const visibleCount = 4; // Number of images visible at once

    const maxIndex = Math.max(0, images.length - visibleCount);
    const next = () => setScrollIndex(i => Math.min(i + 1, maxIndex));
    const prev = () => setScrollIndex(i => Math.max(i - 1, 0));

    // Calculate the transform for sliding
    const imageWidth = 150 + 16; // 150px image + 16px gap (1rem)
    const rowStyle: React.CSSProperties = {
        transform: `translateX(-${scrollIndex * imageWidth}px)`
    };

    return (
        <div className="carousel">
            <div className="carousel-arrow left">
                <button className="carousel-btn" onClick={prev} disabled={scrollIndex === 0}>&lt;</button>
            </div>
            <div className="carousel-viewport">
                <div className="carousel-row" style={rowStyle}>
                    {images.map((src, idx) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>
            <div className="carousel-arrow right">
                <button className="carousel-btn" onClick={next} disabled={scrollIndex === maxIndex}>&gt;</button>
            </div>
        </div>
    );
};

export default About;