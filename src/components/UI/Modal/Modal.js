import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/_Aux/Aux'
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {

    shouldComponentUpdate(nextProps,nextState){
        console.log('',nextProps,nextState);
        return nextProps.show !== this.props.show || nextProps.children!==this.props.children; //add children check of nextState and props here to see spinnerz
    }
    
    componentWillUpdate(){
        console.log('[Modal] updates')
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal;