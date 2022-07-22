import './Modal.css';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';
import useWindowDimensions from '../useWindowDimensions';
import React, { useState, useEffect } from 'react';

const Modal = React.memo(({show, setShow, order}) => {
    // display the price outside of the button only when not on mobile
    const [notMobile, setNotMobile] = useState();
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        window.matchMedia("(min-width: 37.5rem)").matches ? setNotMobile(true) : setNotMobile(false);
    }, [width]);

    return (
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300}}
        >
            <div className="modal" onClick={() => setShow(false)} >
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <p className="body-l modal-header">Order summary</p>
                    <div className="modal-body">
                        <p className="body-m gray">
                            “I drink my coffee as <span className='cyan'>{order[0]}</span>, with 
                            a <span className='cyan'>{order[1] }</span> type of 
                            bean. <span className='cyan'>{order[2]}</span> ground 
                            ala <span className='cyan'>{order[3]}</span>, sent
                            to me <span className='cyan'>{order[4]}</span>.”
                        </p>
                        <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                        
                        { notMobile ? (
                            <div className="modal-footer">
                                <p className="body-m">$14.00 / mo</p>
                                <Button onClick={() => setShow(false)} text="Checkout" />
                            </div>
                        ) : (
                            <div className="modal-footer">
                                <Button onClick={() => setShow(false)} text="Checkout - $14.00 / mo" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
});

export default Modal;