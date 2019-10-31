import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'yii-steroids/ui/nav/Link';
import {openModal} from 'yii-steroids/actions/modal';
import ProjectModal from 'modals/ProjectModal';



export default class ProjectLink extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
        url: PropTypes.string,
    };

    render() {
        return (
            <Link
                {...props}
                url={this.props.url}
                onClick={e => {
                    if (e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                    e.preventDefault();

                    const prevPath = location.pathname;

                    //history.replaceState({}, this.props.project.title, this.props.url);
                    this.props.dispatch(openModal(ProjectModal, {
                        modalId: 'ProjectModal',
                        project: this.props.project,
                        prevPath: prevPath,
                        onClose: () => {
                            history.replaceState({}, '', prevPath);
                        },
                    }));
                }}
            />
        );
    }
}
