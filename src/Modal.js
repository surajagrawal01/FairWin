import cricket3 from "./imgaes/cricket3.webp"
import WhatsAppCall from "./WhatsappCall"
import React, { useEffect, useState } from 'react';

function WelcomeModal() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => setShow(false);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            handleClose();
        }
    };

    return (
        <div className={`modal fade${show ? ' show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" onClick={handleBackdropClick}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" data-dismiss="modal" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="image-container">
                                        <img src={cricket3} alt="Image" style={{ maxWidth: '100%' }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="text-container">
                                        <h2>Welcome to Our Website!</h2>
                                        <p>This is some text describing your website. You can add any relevant information here.</p>
                                        <button type="button" className="btn btn-primary" onClick={() => WhatsAppCall()}>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeModal;