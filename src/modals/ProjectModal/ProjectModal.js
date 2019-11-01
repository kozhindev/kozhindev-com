import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'yii-steroids/ui/modal/Modal';
import Project from 'shared/Project';
import './ProjectModal.scss';
import {html} from 'components';

const bem = html.bem('ProjectModal');

export default class ProjectModal extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
        modalProps: PropTypes.object,
    };

    render() {
        return (
            <Modal
                className={bem.block()}
                {...this.props.modalProps}
            >
                <Project project={this.props.project}/>
            </Modal>
        )
    }
}
