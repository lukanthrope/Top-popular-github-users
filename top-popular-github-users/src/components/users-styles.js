import styled from 'styled-components';

export const Usr = styled.div `
    position: relative;
    margin-top: 100px;
    margin-bottom: 110px;
    border-top: 1px solid black;
    padding-top: 20px;
`;

export const Img = styled.img `
    width: 60px;
    height: 60px;
    border-radius: 10px;
    float: left;
    margin-left: 5%;
    margin-top: 10px;
`;

export const Name = styled.h2 `
    float: left;
    margin-left: 5%;
    margin-top: 5px;
    color: ${props => props.isLink ? "#0099FF" : "black"};
    font-size: ${props => props.isLink ? "" : "1.2em"};
`;

export const Info = styled.p `
    float: right;
    margin-right: 5%;
    margin-top: 10px;
    color: orange;
    font-size: 2em;
`;

export const Err = styled.div `
    color: red;
    text-align: center;
    font-size: 1.3em;
    margin-top: 15%;
`;