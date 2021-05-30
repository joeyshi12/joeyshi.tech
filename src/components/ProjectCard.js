import messages from '../messages/Messages';


const ProjectCard = props => (
    <article className={"feature " + props.orientation}>
        <span className="image">
            <img src={props.imgUrl} alt="" />
        </span>
        <div className="content">
            <h2>{props.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
            <ul className="actions">
                <li>
                    <a href={props.githubUrl} className="button">
                        {messages.repoLink}
                    </a>
                </li>
            </ul>
        </div>
    </article>
);

export default ProjectCard;