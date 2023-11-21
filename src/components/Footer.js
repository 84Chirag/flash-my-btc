import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FLASHMYBTC from '../img/logos/FLASHMYBTC-LOGO-WHITE (1).png'
import Alert from './Alert'

let Footer = () => {

    // let requestAnimFrame;
    useEffect(() => {
        let circles = [],
            canvas = document.getElementById("canvas1"),
            context = canvas.getContext("2d");
        // console.log(canvas, 'heree')

        // SETTINGS 
        let initialSize = 2; // Set the initial size
        let opacity = 1;                                      // the opacity of the circles 0 to 1
        let colors = ['rgba(249, 183, 7,' + opacity + ')',       // an array of rgb colors for the circles
        'rgba(249, 183, 7,' + opacity + ')',
        'rgba(249, 183, 7,' + opacity + ')'
        ];
        // let minSize = 0.5;                                        // the minimum size of the circles in px
        // let maxSize = 1;                                       // the maximum size of the circles in px
        let size = initialSize; // Use the initial size here
        let numCircles = 100;                                   // the number of circles
        let minSpeed = -3;                                     // the minimum speed, recommended: -maxspeed
        let maxSpeed = 3;                                    // the maximum speed of the circles

        function buildArray() {
            'use strict';

            for (let i = 0; i < numCircles; i++) {
                let color = Math.floor(Math.random() * (colors.length - 1 + 1)) + 1,
                    left = Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0,
                    top = Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0,
                    // size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
                    size = initialSize,
                    leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10,
                    topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10;

                let expandState = true; // Use a different variable name

                while (leftSpeed === 0 || topSpeed === 0) {
                    leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10;
                    topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10;
                }

                let circle = {
                    color: color,
                    left: left,
                    top: top,
                    size: size,
                    leftSpeed: leftSpeed,
                    topSpeed: topSpeed,
                    expandState: expandState
                };
                circles.push(circle);
            }
        }

        function build() {
            'use strict';

            for (let h = 0; h < circles.length; h++) {
                let curCircle = circles[h];
                context.fillStyle = colors[curCircle.color - 1];
                context.beginPath();
                /*
                if (curCircle.left > canvas.width + curCircle.size) {
                    curCircle.left = 0 - curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                } else if (curCircle.left < 0 - curCircle.size) {
                    curCircle.left = canvas.width + curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                } else {
                    curCircle.left = curCircle.left + curCircle.leftSpeed;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                }
                */
                if (curCircle.left > canvas.width + curCircle.size) {
                    curCircle.left = 0 - curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                } else if (curCircle.left < 0 - curCircle.size) {
                    curCircle.left = canvas.width + curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                } else {
                    curCircle.left = curCircle.left + curCircle.leftSpeed;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                }
                /*
                if (curCircle.top > canvas.height + curCircle.size) {
                    curCircle.top = 0 - curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);

                } else if (curCircle.top < 0 - curCircle.size) {
                    curCircle.top = canvas.height + curCircle.size;
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                } else {
                    curCircle.top = curCircle.top + curCircle.topSpeed;
                    if (curCircle.size !== maxSize && curCircle.size !== minSize && curCircle.expandState === false) {
                        curCircle.size = curCircle.size - 0.1;
                    }
                    else if (curCircle.size !== maxSize && curCircle.size !== minSize && curCircle.expandState === true) {
                        curCircle.size = curCircle.size + 0.1;
                    }
                    else if (curCircle.size === maxSize && curCircle.expandState === true) {
                        curCircle.expandState = false;
                        curCircle.size = curCircle.size - 0.1;
                    }
                    else if (curCircle.size === minSize && curCircle.expandState === false) {
                        curCircle.expandState = true;
                        curCircle.size = curCircle.size + 0.1;
                    }
                    context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
                }
                */
                context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);

                context.closePath();
                context.fill();
                // context.ellipse;
            }
        }


        let xVal = 0;
        const requestAnimFrame = (function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        })();

        function bly_animate() {
            'use strict';
            let canvas = document.getElementById("canvas1"),
                context = canvas.getContext("2d");

            // clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);


            // draw the next frame
            xVal++;
            build();

            //console.log("Prep: bly_animate ===> requestAnimFrame");
            // request a new frame
            requestAnimFrame(function () {
                bly_animate();
            });
        }
        window.onload = function () {
            'use strict';
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildArray();
            bly_animate();
        };


        window.onresize = function () {
            'use strict';
            console.log("resize");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            //buildArray();
            bly_animate();
        };
    }, [])


    const [showAlerts, setshowAlerts] = useState(false);
    const [showAlerts1, setshowAlerts1] = useState(false);
    const [showPasswordMismatchAlert, setShowPasswordMismatchAlert] = useState(false);
    const [correctinfoAlert, setCorrectInfoAlert] = useState(false);
    const [useddataAlert, setUsedDataAlert] = useState(false);

    // for signup
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const submitdata = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        if (password === cpassword) {
            const url = 'http://localhost:3001/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            // console.log(json);
            if (json.success === true) {
                localStorage.setItem('auth-token', json.authtoken);
                setshowAlerts(true);
                setTimeout(() => {
                    setshowAlerts(false);
                    navigate('/');
                }, 2000);
            } else {
                // alert("wrong!")
                setUsedDataAlert(true);
                setTimeout(() => {
                    setUsedDataAlert(false)
                }, 2000);
            }
        }
        else{
            setShowPasswordMismatchAlert(true);
            setTimeout(() => {
                setShowPasswordMismatchAlert(false);
            }, 2000);
        }
    }
    const savechange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    // for login
    const [credentials1, setCredentials1] = useState({ email1: "", password1: "" });
    const submitdata1 = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3001/auth/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials1.email1, password: credentials1.password1 })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success === true) {
            localStorage.setItem('auth-token', json.authtoken);
            setshowAlerts1(true);
            setTimeout(() => {
                setshowAlerts1(false);
                navigate('/bitpro');
            }, 2000);
            // alert('sucessfull!')
        } else {
            // alert("wrong!")
            setCorrectInfoAlert(true);
            setTimeout(() => {
                setCorrectInfoAlert(false);
            }, 2000);
        }

    }
    const savechange1 = (e) => {
        setCredentials1({ ...credentials1, [e.target.name]: e.target.value })
    }

    // back to top function's
    const [ showButton, setShowButton ] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const backToTop = ()=>{
        if (window.screenY < 100) {
            window.scrollTo({top:0,behavior:'smooth'});
        };
    };
    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {showAlerts && <Alert type="success" msg="You Have Been Registered Successfully" />}
            {showAlerts1 && <Alert type="success" msg="You Have Been Logged In Successfully" />}
            {showPasswordMismatchAlert && <Alert type="warning" msg="Your Password and Confirm Password Doesn't Match" />}
            {correctinfoAlert && <Alert type="warning" msg="Enter Your Credentials Correctly" />}
            {useddataAlert && <Alert type="warning" msg="User With This Email Exists" />}
            <footer id="contact" className="iq-footer1 black-bg overview-block-pt iq-bg-over iq-over-black-20 mt-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 iq-mtb-10">
                            <div className="logo">
                                <img className="img-fluid1" src={FLASHMYBTC} alt="#" />
                                <h5>Flash Bitcoin Generator Software</h5>
                                <div className="text-white iq-mt-15">Do You Earn Money With fake Bitcoin? We have this tool that generates huge sums of BTC to any wallet. We can send fake transactions to any wallet of your choice and it stays up to 90 Days.</div>
                                <ul className="info-share">
                                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 iq-mtb-10 about-us r9-mt-40">
                            <h5 className="small-title iq-tw-6 text-white iq-mb-30">About Us</h5>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <ul className="menu">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#product">Our Product</a></li>
                                        {/* <!-- <li><a href="#">Portfolio</a></li> --> */}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <ul className="menu">

                                        <li><a href="#faq">Faqs</a></li>
                                        {/* <!-- <li><a href="#">Blog</a></li> --> */}
                                        {/* <!-- <li><a href="#">Our Services</a></li> --> */}
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 iq-mtb-10 iq-newsletter r9-mt-40">
                            <h5 className="small-title iq-tw-6 text-white iq-mb-30">Newsletter</h5>
                            <p className="text-white">Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                            <form className="newsletter-form">
                                <div className="input-group">
                                    <input type="email" className="form-control placeholder" placeholder="Enter your Email" />
                                    <a className="button" href="#" role="button">Go</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="r9-mt-40" />
                </div>
                <div className="container-fluid iq-pall ">
                    <div className="footer-bottom iq-ptb-20 dark-bg ">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <div className="iq-copyright text-white">© Copyright 2023<a href="#" target="_blank"></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- =================================================
        Footer 2 -- > */}

            <div className="modal fade iq-login" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content blue-bg">
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Login</h4>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-form">
                                <form action="login.php" method="post" onSubmit={submitdata1}>
                                    <div className="section-field">
                                        <input className="require" id="contact_email" type='email' placeholder="Email*" name="email1" onChange={savechange1} />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_password" type="password" placeholder="Password*" name="password1" onChange={savechange1} minLength={5} />
                                    </div>
                                    <input type="submit" className="button iq-mtb-10" name="submit" data-bs-dismiss="modal" aria-label="Close" />
                                    <div className="row">
                                        <div className="col-sm-6">


                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" />Remember Me</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-end">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <div> Don't Have an Account? <a href="#" data-bs-toggle="modal" data-bs-target=".iq-register" className="iq-font-yellow">Register Now</a></div>
                            <ul className="iq-media-blog iq-mt-20">
                                <li><a href="# "><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-facebook "></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-google "></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-github "></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--register --> */}

            <div className="modal fade iq-register" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content blue-bg">
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Register</h4>
                            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-form">
                                <form action="register.php" method="post" onSubmit={submitdata}>
                                    <div className="section-field">
                                        <input className="require" id="contact_name" type="text" placeholder="Name*" name="name" onChange={savechange} />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_email" type="email" placeholder="Email*" name="email" onChange={savechange} />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_password" type="password" placeholder="Password*" name="password" onChange={savechange} minLength={5} />
                                    </div>
                                    <div className="section-field">
                                        <input className="require" id="contact_confirmpassword" type="password" placeholder="Confirm Password*" name="cpassword" onChange={savechange} />
                                    </div>
                                    <input type="submit" className="button iq-mtb-10" name="submit" data-bs-dismiss="modal" aria-label="Close" />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" />Remember Me</label>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="col-sm-6 text-end">
                            <a href="#">Forgot Password</a>
                        </div> --> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <div> Already Have an Account? <a href="#" data-bs-toggle="modal" data-bs-target=".iq-login" className="iq-font-yellow">Login</a></div>
                            <ul className="iq-media-blog iq-mt-20">
                                <li><a href="# "><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-facebook "></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-google "></i></a></li>
                                <li><a href="# "><i className="fa-brands fa-github "></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/* <!--back - to - top-- > */}
            {showButton && (
            <div id="back-to-top">
                <button className="top" id="top" onClick={backToTop} ><i className="fa fa-angle-double-up" aria-hidden="true"></i> </button>
            </div>
            )}
            {/* <!--back - to - top End-- > */}
            {/* < !--bubbly --> */}
            <canvas id='canvas1' style={{ background: 'rgb(33, 37, 41)' }}></canvas>
            {/* <!--bubbly End-- > */}
        </>
    )
}

export default Footer