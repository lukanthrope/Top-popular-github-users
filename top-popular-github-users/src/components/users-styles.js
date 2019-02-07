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
    float: left;
    display: flex;
    position: absolute;
    margin-left: 15%;
    margin-top: 50px;
`;