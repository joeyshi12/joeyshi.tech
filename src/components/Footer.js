import messages from "../messages/Messages";


const Footer = () => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li>
                    <a href={messages.emailUrl} className="icon fa-envelope">
                        <span className="label">
                            {messages.email}
                        </span>
                    </a>
                </li>
                <li>
                    <a href={messages.githubProfileUrl} className="icon fa-github">
                        <span className="label">
                            {messages.github}
                        </span>
                    </a>
                </li>
                <li>
                    <a href={messages.linkedinProfileUrl} className="icon fa-linkedin">
                        <span className="label">
                            {messages.linkedin}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;