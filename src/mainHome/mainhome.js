import React from "react";
import image from "../assects/header-bg.jpg";
export default function mainhome() {
    return (
        <section className="intro">
            <div className="inner">
                <div className="content">
                    <section className="title">
                        <h1 className="animate__animated animate__bounceInDown  my-5 mb-5">
                            Dream Tshirts
                        </h1>
                    </section>
                    <section className=" animate__animated animate__bounceInUp ">
                        <a className="button mx-auto " href="/home">
                            GET STARTED
                        </a>
                    </section>
                </div>
            </div>
            {/* <div className="image-fixed">
                <img src="header-bg.jpg" />
            </div> */}
        </section>
    );
}
