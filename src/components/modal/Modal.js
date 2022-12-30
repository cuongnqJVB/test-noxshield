import React from 'react';

const Modal = ({ children, size, visible, onClose, bodyClass }) => {
    return (
        <div
            className={`modal-wrap ${visible ? 'open' : ''}`}
            onClick={() => onClose()}
        >
            <div role={'document'} className={`modal beautify-scroll ${size}`}>
                <div
                    className={`modal_body ${bodyClass}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
