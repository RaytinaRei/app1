import React from 'react'

export function Header() {
const aStyle = {
display: 'inline-block',
Color: 'blue',
margin: '7px',
TextDecoration: 'none',

}
return (
    <div style={{backgroundColor: '#ccc'}}>
        <a href= " " style={aStyle}>Home</a>
        <a href= " " style={aStyle}>React</a>
        <a href= " " style={aStyle}>React & React Native</a>
    </div>)
}

export function Content() {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>
                Welcome
                <br />
                React & React Native
            </h2>

            <br />
            <br />
        </div>
    );
} 

export const Footer = () => {
    return (
        <div style={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} React & React Native
        </div>
    );
};