import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'yii-steroids/ui/modal/Modal';

import {html} from 'components';
import Project from 'shared/Project';
import {projects} from 'data/projects';

import './ProjectModal.scss';
import {getNavUrl} from 'yii-steroids/reducers/navigation';
import {ROUTE_PROJECTS_ITEM} from 'routes';
import {openModal} from 'yii-steroids/actions/modal';

const bem = html.bem('ProjectModal');

class ProjectModalInner extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
        modalProps: PropTypes.object,
        prevUrl: PropTypes.string,
        prevProject: PropTypes.object,
        nextUrl: PropTypes.string,
        nextProject: PropTypes.object,
    };

    render() {
        return (
            <Modal
                className={bem.block()}
                {...this.props.modalProps}
                onPrev={this.props.prevUrl !== null && (() => {

                    history.replaceState({}, '', this.props.prevUrl);
                    this.props.dispatch(openModal(ProjectModal, {
                        modalId: 'ProjectModal',
                        project: this.props.prevProject,
                    }));
                })}
                onNext={this.props.nextUrl !== null && (() => {
                    history.replaceState({}, '', this.props.nextUrl);
                    this.props.dispatch(openModal(ProjectModal, {
                        modalId: 'ProjectModal',
                        project: this.props.nextProject,
                    }));
                })}
            >
                <Project project={this.props.project} modal/>
            </Modal>
        );
    }
}

const ProjectModal = connect(
    (state, props) => {
        const index = projects.findIndex(project => project.id === props.project.id);
        const prevProject = projects[index - 1];
        const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

        return {
            prevUrl: prevProject && getNavUrl(state, ROUTE_PROJECTS_ITEM, {id: prevProject.id}) || null,
            prevProject,
            nextUrl: nextProject && getNavUrl(state, ROUTE_PROJECTS_ITEM, {id: nextProject.id}) || null,
            nextProject,
        };
    }
)(ProjectModalInner);

export default ProjectModal;
