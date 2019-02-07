import React, { Component } from 'react';
import {Usr, Img, Name, Info} from './users-styles';

function User(props) {
    return(
        <Usr>
            <Img alt="user-image" src={props.avatarUrl}/>
            <a target="_blank" href={`https://github.com/${props.login}`}>
                <Name isLink>{props.login}</Name>
            </a>
            <Info>stars:{props.starsCount}</Info>
        </Usr>
    );
}

export default User;