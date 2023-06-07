import React from "react";

function Header(prop) {
    return (
        <div className="header" style={prop.style}>
            <h1>Welcome to 30 DAYS OF REACTJS</h1>
            <h2>Getting Started React</h2>
            <p>JavaScript Library</p>
        </div>
    );
}
export default Header