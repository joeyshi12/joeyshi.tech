import messages from "../messages/Messages";
import pdf from "../assets/images/resume.pdf"


const Banner = () => (
    <section id="banner">
        <h2>{messages.personalName}</h2>
        <p>{messages.shortDescription}</p>
        <ul className="actions">
            <li>
                <a href={pdf} className="button big special">
                    {messages.resume}
                </a>
            </li>
        </ul>
    </section>
);

export default Banner;