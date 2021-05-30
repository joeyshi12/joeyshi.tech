import messages from '../messages/Messages';


const About = () => (
    <section id="main" className="wrapper">
        <div className="container">
            <h2>{messages.aboutHeader}</h2>
            <p dangerouslySetInnerHTML={{ __html: messages.aboutDescription }}></p>
        </div>
    </section>
);

export default About;