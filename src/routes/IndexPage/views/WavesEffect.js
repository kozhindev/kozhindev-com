import React from 'react';
import {findDOMNode} from 'react-dom';
import * as three from 'three';

import {html} from 'components';

import './WavesEffect.scss';

const bem = html.bem('WavesEffect');

export default class WavesEffect extends React.Component {

    constructor() {
        super(...arguments);

        this._animate = this._animate.bind(this);
        this._onDocumentMouseMove = this._onDocumentMouseMove.bind(this);
        this._onDocumentTouchStart = this._onDocumentTouchStart.bind(this);
        this._onDocumentTouchMove = this._onDocumentTouchMove.bind(this);
        this._onWindowResize = this._onWindowResize.bind(this);
        this._onWindowScroll = this._onWindowScroll.bind(this);

        this._scene = null;
        this._camera = null;
        this._renderer = null;
        this._particles = [];
        this._count = 0;
        this._mouseX = 85;
        this._mouseY = -window.innerHeight / 2;

        this._windowHalfX = window.innerWidth / 2;
        this._windowHalfY = window.innerHeight / 2;

        this.SEPARATION = 100;
        this.AMOUNT_X = 100;
        this.AMOUNT_Y = 50;

        this.state = {
            isEnable: true,
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        document.addEventListener('mousemove', this._onDocumentMouseMove, false);
        document.addEventListener('touchstart', this._onDocumentTouchStart, false);
        document.addEventListener('touchmove', this._onDocumentTouchMove, false);
        window.addEventListener('resize', this._onWindowResize, false);
        window.addEventListener('scroll', this._onWindowScroll, false);

        this._camera = new three.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        this._camera.position.z = 1000;
        this._scene = new three.Scene();

        const material = new three.ParticleCanvasMaterial({
            color: 0xe1e1e1,
            program: context => {
                context.beginPath();
                context.arc(0, 0, .7, 0, Math.PI * 2, true);
                context.fill();
            }
        });

        let i = 0;
        for (let ix = 0; ix < this.AMOUNT_X; ix++) {
            for (let iy = 0; iy < this.AMOUNT_Y; iy++) {
                const particle = this._particles[i++] = new three.Particle(material);
                particle.position.x = ix * this.SEPARATION - ((this.AMOUNT_X * this.SEPARATION) / 2);
                particle.position.z = iy * this.SEPARATION - ((this.AMOUNT_Y * this.SEPARATION) / 2);
                this._scene.add(particle);
            }
        }

        this._renderer = new three.CanvasRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        findDOMNode(this).appendChild(this._renderer.domElement);

        this._animate();

        setTimeout(() => this.setState({isEnable: false}), 2000);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this._onDocumentMouseMove, false);
        document.removeEventListener('touchstart', this._onDocumentTouchStart, false);
        document.removeEventListener('touchmove', this._onDocumentTouchMove, false);
        window.removeEventListener('resize', this._onWindowResize, false);
        window.removeEventListener('scroll', this._onWindowScroll, false);
    }

    render() {
        return (
            <div className={bem.block()}>
                <div/>
                <div/>
            </div>
        );
    }

    _animate() {
        if (this.state.isEnable) {
            requestAnimationFrame(this._animate);
        }

        this._camera.position.x += (this._mouseX - this._camera.position.x) * .05;
        this._camera.position.y +=(-this._mouseY + (window.innerHeight/2) - this._camera.position.y) * .05;
        this._camera.lookAt(this._scene.position);

        let i = 0;
        for (let ix = 0; ix < this.AMOUNT_X; ix++) {
            for (let iy = 0; iy < this.AMOUNT_Y; iy++) {
                const particle = this._particles[i++];
                particle.position.y = (Math.sin((ix + this._count) * 0.3) * 50) + (Math.sin((iy + this._count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + this._count) * 0.3) + 1) * 2 + (Math.sin((iy + this._count) * 0.5) + 1) * 2;
            }
        }

        this._renderer.render(this._scene, this._camera);

        this._count += 0.1;
    }

    _onWindowResize() {
        this._windowHalfX = window.innerWidth / 2;
        this._windowHalfY = window.innerHeight / 2;

        this._camera.aspect = window.innerWidth / window.innerHeight;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(window.innerWidth, window.innerHeight);
        //this._animate();
        this._onWindowScroll();
    }

    _onWindowScroll() {
        const isEnable = window.scrollY < window.innerHeight / 2;
        if (this.state.isEnable !== isEnable) {
            this.setState({isEnable});
            if (isEnable) {
                this._animate();
            }
        }
    }

    _onDocumentMouseMove(event) {
        this._mouseX = event.clientX - this._windowHalfX;
        this._mouseY = event.clientY - this._windowHalfY;
    }

    _onDocumentTouchStart(event) {
        if (event.touches.length === 1) {
            event.preventDefault();

            this._mouseX = event.touches[0].pageX - this._windowHalfX;
            this._mouseY = event.touches[0].pageY - this._windowHalfY;
        }
    }

    _onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();

            this._mouseX = event.touches[0].pageX - this._windowHalfX;
            this._mouseY = event.touches[0].pageY - this._windowHalfY;
        }
    }

}
