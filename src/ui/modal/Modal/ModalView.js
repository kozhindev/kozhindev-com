import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './ModalView.scss';
import {html} from 'components';

const bem = html.bem('ModalView');

export default class ModalView extends React.PureComponent {

    static propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func,
        onPrev: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
        onNext: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool,
        ]),
    };

    constructor() {
        super(...arguments);

        this._onKeyDown = this._onKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this._onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this._onKeyDown);
    }

    render() {
        return (
            <div className={bem.block()}>
                <Modal
                    isOpen={true}
                    overlayClassName={bem.element('overlay')}
                    ariaHideApp={false}
                    {...this.props}
                    className={bem(
                        bem.element('modal'),
                        this.props.className
                    )}
                    onRequestClose={this.props.onClose}
                >
                    {this.props.onPrev && (
                        <div
                            className={bem.element('prev')}
                            onClick={this.props.onPrev}
                        />
                    )}
                    {this.props.onNext && (
                        <div
                            className={bem.element('next')}
                            onClick={this.props.onNext}
                        />
                    )}
                    <div className={bem.element('inner')}>
                        <div className={bem.element('header')}>
                            <a
                                className={bem.element('close')}
                                href='#'
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.onClose();
                                }}
                            />
                        </div>
                        <div className={bem.element('content')}>
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

    _onKeyDown(e) {
        switch (e.which) {
            case 37: // arrow left
                if (this.props.onPrev) {
                    e.preventDefault();
                    this.props.onPrev(e);
                }
                break;

            case 39: // arrow right
                if (this.props.onNext) {
                    e.preventDefault();
                    this.props.onNext(e);
                }
                break;
        }
    }
}
