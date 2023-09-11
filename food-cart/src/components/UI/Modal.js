import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function Backdrop(props) {
    return (
        <div className={styles.backdrop}/>
    );
}

function ModalOverlay(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
}

export default Modal;