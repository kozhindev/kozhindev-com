import React from 'react';
import {html} from 'components';
import projects from 'data/projects';
import ProjectCard from 'shared/ProjectCard/ProjectCard';
import './ProjectsPage.scss';
import moment from 'moment';

const bem = html.bem('ProjectsPage');


export default class ProjectsPage extends React.PureComponent {

    render() {
        const sortedProjects = projects.sort((a, b) => {
            return moment(b.from).year() - moment(a.from).year();
        });

        console.log(111, sortedProjects);
        let year = null;

        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h1 className={'mb-4'}>
                        {__('Наши проекты')}
                    </h1>
                    <div className={'row'}>
                        {sortedProjects.map((item, index) => {
                            let yearTitle = null;
                            const yearFrom = moment(item.from).year();

                            if(year === null || year !== yearFrom) {
                                year = yearFrom;
                                yearTitle = (
                                    <h5 className={'col-12 mb-3'}>{yearFrom}</h5>
                                )
                            }

                            return (
                                <>
                                    {yearTitle}
                                    <div
                                        key={index}
                                        className={bem(bem.element('project'), 'col-4')}
                                    >
                                        <ProjectCard
                                            name={item.id}
                                            project={item}

                                        />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
