import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'yii-steroids/ui/modal/Modal';
import Project from 'shared/Project';
import './ProjectModal.scss';

const bem = html.bem('ProjectModal');

export default class ProjectModal extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <Modal className={bem.block()}>
                <Project />
            </Modal>
        )
    }
}
