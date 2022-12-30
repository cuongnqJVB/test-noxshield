/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Modal from './Modal';

const BannerModal = ({ visible, onClose, desktopUrl, mobileUrl, redirectLink }) => {
    return (
        <Modal size={'zalo'} visible={visible} onClose={onClose}>
            <div
                className="banner-popup wow fadeIn animated"
                style={{
                    visibility: 'visible',
                    animationName: 'fadeIn'
                }}
            >
                <a
                    href={redirectLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='img-desktop' src={desktopUrl} alt="popup" />
                    <img className='img-mobile' src={mobileUrl} alt="popup" />
                </a>
            </div>
        </Modal>
    );
};
export default BannerModal;
