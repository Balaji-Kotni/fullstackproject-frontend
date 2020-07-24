import React from "react";
import Menu from "./menu";

const Base = ({
    title = "My Title ",
    description = "My desription",
    className = "bg-gradient-info text-white p-4",
    children,
}) => (
    <div>
        <Menu />
        <div className="container-fluid">
            <div className="jumbotron  text-white text-center">
                <h2 className="display-4 text-dark">{title}</h2>
                <p className="lead text-dark">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer  mt-5 py-0">
            <div className="container-fluid bg-secondry text-black text-center py-3">
                <h4>If you have any qution feel free to reach</h4>
                <button className="btn btn-warning btn-lg">Contract Us</button>
            </div>
            <div className="container">
                <span className="text-muted ">
                    An Amazing place to buy tshirt
                </span>
            </div>
        </footer>
    </div>
);

export default Base;
