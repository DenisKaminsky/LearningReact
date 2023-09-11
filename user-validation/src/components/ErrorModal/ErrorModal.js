import React from 'react';
import ReactDOM from 'react-dom';

import styles from './ErrorModal.module.css';
import Button from '../UI/Button';

function Backdrop(props) {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}/>
    );
}

function Modal(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>{props.header}</h2>
            </div>
            <div className={styles.content}>
                <h3>{props.message}</h3>
            </div>
            <div className={styles.actions}>
                <Button label="Close" onClick={props.onConfirm}/>
            </div>
        </div>
    );
}

function ErrorModal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop 
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <Modal 
                    onConfirm={props.onConfirm} 
                    header={props.header}
                    message={props.message}
                />,
                document.getElementById("modal-root")
            )}
        </React.Fragment>
    );
}

export default ErrorModal;