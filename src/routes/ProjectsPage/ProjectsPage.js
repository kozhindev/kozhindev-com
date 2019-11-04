import React from 'react';
import moment from 'moment';
import _groupBy from 'lodash/groupBy';

import {html} from 'components';
import {projects} from 'data/projects';
import ProjectCard from 'shared/ProjectCard/ProjectCard';

import './ProjectsPage.scss';

const bem = html.bem('ProjectsPage');

export default class ProjectsPage extends React.PureComponent {

    render() {
        const groupedProjects = _groupBy(projects, item => item.to !== 'NOW' ? moment(item.to).year() : 'NOW');
        const years = Object.keys(groupedProjects).reverse();

        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h1 className={'mb-4'}>
                        {__('Наши проекты')}
                    </h1>
                    {years.map(year => (
                        <div
                            key={year}
                            className='row'
                        >
                            <div className={bem(bem.element('year'), 'col-12')}>
                                {year === 'NOW' ? __('Текущие проекты') : year}
                            </div>
                            {groupedProjects[year].map(project => (
                                <div
                                    key={project.id}
                                    className={bem(bem.element('project'), project.previewImageUrl ? 'col-md-6 col-lg-8' : 'col-md-6 col-lg-4')}
                                >
                                    <ProjectCard
                                        name={project.id}
                                        project={project}
                                        size='sm'
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
