import './about.css';

export const about_text = () => {
  return (
    <>
      <h1>About Me</h1>
      <p>
        Hi, I'm Andrew Rodabough. Currently I am in Provo Utah, studying Computer Science
        at Brigham Young University. I specialize in full-stack web development, building 
        desktop and mobile friendly applications.
      </p>
      <p>Along with my studies, I am a co-founder of Mambo — a dance competition management suite</p>
      <p>In my free time, I enjoy ballroom and Latin dancing and creating art, particularly digital art.</p>
    </>
  )
}

export const About = () => {
  return (
    <main>
      <section className="temp about" id="about">
        {about_text()}
        <a href="/about" className="morelink" style={{ marginTop: '1rem', alignSelf: 'center' }}>
          Learn More
        </a>
      </section>
    </main>
  );
};

export default About;