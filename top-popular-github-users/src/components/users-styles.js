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


export const Input = styled.input `
    text-align: center;
    font-size: 1.3em;
`;


export const But = styled.input `
    text-align: center;
    font-size: 1.2em;
    margin-left: 5px;
    margin-top: 0px;

    background-color: #E8E8E8;
	-moz-border-radius:15px;
	-webkit-border-radius:15px;
	border-radius:15px;
	border:2px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
    padding:8px 14px;
	text-decoration:none;
`;
