 import { Component } from 'react';
import ProjectCard from './ProjectCard';
import projectMessages from '../messages/ProjectMessages';


class Projects extends Component {
    getProjectCards() {
        const projectCards = [];
        for (const i in projectMessages) {
            const orientation = i % 2 ? 'right' : 'left'
            const metadata = projectMessages[i];
            projectCards.push((
                <ProjectCard key={i}
                             title={metadata.title}
                             description={metadata.description}
                             imgUrl={metadata.imgUrl}
                             githubUrl={metadata.githubUrl}
                             orientation={orientation} />
            ));
        }
        return projectCards
    }

    render() {
        return (
            <section className="wrapper style1">
                <div className="inner">
                    {this.getProjectCards()}
                </div>
            </section>
        );
    }
}

export default Projects;