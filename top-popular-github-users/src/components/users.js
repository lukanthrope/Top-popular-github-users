import React, { Component } from 'react';
import {Usr, Img, Name, Info} from './users-styles';

function User() {
    return(
        <Usr>
            <Img alt="user-image" src="https://www.abc.net.au/news/image/9667872-3x2-700x467.jpg"/>
            <a href="#">
                <Name isLink>user_name</Name>
            </a>
            <Name>Name Lastname</Name>  
            <Info>some sdadsadsdasdasdasdasdsa sad sad aas das  asd a a   ddddddddddt</Info>
        </Usr>
    );
}

export default User;