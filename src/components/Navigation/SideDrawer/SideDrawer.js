import React from 'react'
import Logo from '../../LOGO/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/_Aux/Aux'
import './SideDrawer.css'
const sideDrawer = (props) => {
    let attachedClasses=['SideDrawer','Close'];
    if(props.open){
        attachedClasses=['SideDrawer','Open']
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
}

export default sideDrawer;