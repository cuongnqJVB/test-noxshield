/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Modal from './Modal';

const ZaloModal = ({ visible, onClose, desktopUrl, mobileUrl, redirectLink }) => {
    return (
        <Modal
            size={'zalo'}
            visible={visible}
            onClose={onClose}
            bodyClass="rounded-60px"
        >
            <div className="zalo-popup desktop">
                <a
                    href={redirectLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={desktopUrl} alt="popup" />
                </a>
            </div>
            <div className="zalo-popup mobile">
                {/* <img
                    className="icon-zalo"
                    src="/icons/ic-zalo-square.svg"
                    alt="ic-zalo"
                /> */}
                <a
                    href={redirectLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={mobileUrl} alt="popup" />
                </a>
            </div>
        </Modal>
    );
};
export default ZaloModal;
