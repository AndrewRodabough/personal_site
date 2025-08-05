import React from 'react';
import '../styles.css';
import Mountians from '../components/mountains';
import NavBar from '../components/navbar/navbar';

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
                            
                                    In my free time, I enjoy working on personal projects,I also enjoy ballroom dancing, art, and Cooking.
                                </p>
                            </div>
                        </section>
                    </section>

                    <section className="idk">
                        <h2>Ballooom</h2>
                        <p>For the last 3 years I have been immersed in the world of ballroom dancing. I dance as a member of BYU's ballroom dance company</p>
                        <h2>Art</h2>
                        <p>I love art in just about any form. Some of my favorite art mediums, include 3D modeling, painting, sketching, and other crafts</p>
                        <p></p>
                        <h2>Cooking</h2>
                        <p>le cooking</p>
                        <h2>Coding</h2>
                        <p>I am Graduating with my degree in computer science. I like making games</p>
                        </section>
                </section>
                
            </main>
        </>
    );
};

export default About;