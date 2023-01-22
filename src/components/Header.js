import React from "react";

function Header(){
    return (
        <div className="header">
            <img src={require("../images/airbnb.png")} alt="" className="logo" />
        </div>
    );
}

export default Header;