import React from "react";
import { Link } from "react-router-dom";
import home1 from '../images/home1.png';
import globe from '../images/Asset-2-768x795.png';
import bitpro from '../images/Bitpro.jpg'
import bitgen from '../images/Bitgen.jpg'
import vector from '../images/Vector-Attack-76.jpg'

const Bitpro = (props) => {
  return (
    <>
      <div id="home" className="iq-banner-2">
        <div id="particles-js" className="particles-js"></div>
        <div className="banner-info">
          <div className="container">
            <div
              className="row justify-content-md-center"
              style={{ marginTop: "-110px" }}
            >
              <div className="col-md-6">
                <div className="ova-heading-content">
                  <h1 className="ova-heading ">{props.title}</h1>
                  <p
                    className="ova-heading-description"
                    style={{ fontSize: "18px" }}
                  >
                    {props.description}
                  </p>
                </div>

                <Link to={props.slug} className="button iq-mt-20 iq-ml-10">
                  Buy
                </Link>
                <div className="banner-text text-center text-white"></div>
              </div>
              <div className="col-md-6 text-center">
                <div className="iq-countdown">
                  <img
                    src={home1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner --> */}
      {/* <!-- Main-Contain --> */}
      <div className="main-contain">
        {/* <!-- Clients --> */}
        {/* <!-- What is OVEX --> */}
        <section id="ico" className="overview-block-ptb">
          <div className="container" id="about">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="heading-title left">
                  <h2 className="iq-font-green mb-5">Information</h2>
                  <div className="icon">
                    <h4 className="iq-tw-6 ">
                      <a href="">
                        <i className="fa-brands fa-btc"></i>
                      </a>
                      Generate BTC Everyday{" "}
                    </h4>
                    <h1 className="mb-4">1BTC</h1>

                    <h4 className="iq-tw-6">
                      <a href="">
                        <i className="fa-solid fa-wallet"></i>
                      </a>
                      Splitable Wallets
                    </h4>
                    <h1 className="mb-4">Unlimeted</h1>

                    <h4 className="iq-tw-6">
                      <a href="">
                        <i className="fa-solid fa-star"></i>
                      </a>
                      Disappear Time
                    </h4>
                    <h1 className="mb-4">24 Hr.</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center mt-5 mt-lg-0">
                <img
                  src={globe}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- What is OVEX END --> */}
        {/* <!-- About Us --> */}
        <section className="overview-block-pb" id="product">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="heading-title">
                  <h2 className="title iq-tw-6">OUR PRODUCT</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row ova-item">
                <div className="col-lg-4 col-md-4 iq-r-mt-40">
                  <div className="iq-small-icon ui-card">
                    <img
                      src={bitgen}
                      alt="icon"
                      className="img-fluid"
                    />
                    <div className="description">
                      <h6 className="iq-mb-10 mt-2">Bitgen</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 iq-r-mt-40">
                  <div className="iq-small-icon ui-card">
                    <img
                      src={bitpro}
                      alt="icon"
                      className="img-fluid"
                    />
                    <div className="description">
                      <h6 className="iq-mb-10 mt-2">Bitpro</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 iq-r-mt-40">
                  <div className="iq-small-icon active ui-card">
                    <img
                      src={vector}
                      alt="icon"
                      className="img-fluid"
                    />
                    <div className="description">
                      <h6 className="iq-mb-10 mt-2">Vector Attack 76</h6>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 iq-r-mt-40">
                  <div className="iq-small-icon">
                    <img
                      src="https://flashdone.com/wp-content/uploads/2022/01/Binance-server.jpg"
                      alt="icon"
                      className="img-fluid"
                    />
                    <div className="description">
                      <h6 className="iq-mb-10 mt-2">Binance Server</h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- PARTNERS END --> */}
        {/* <!-- FAQ --> */}
        <section className="iq-anything overview-block-pb" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="heading-title">
                  <small className="iq-font-green">Ask Anything</small>
                  <h2 className="title iq-tw-6">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 r9-mt-40">
                <div className="iq-accordion">
                  <div className="iq-ad-block ad-active">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      Version 1.5.7- Latest Update (08/05/2021)
                    </a>
                    <div className="ad-details">
                      – Ethereum transaction added <br />
                      – Fixed License synchronize issuebr <br />– Removed
                      replace by fees feature
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.6- updated – Added exchanges
                    </a>
                    <div className="ad-details">
                      – User Interface <br />– User-Friendly Graphics
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.5 R10- updated – target API 28
                    </a>
                    <div className="ad-details">– user experience improved</div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.5- updated – removed installation complication
                    </a>
                    <div className="ad-details">
                      – replace by fees <br />
                      – fixed requirement checkers bugs on some 64bit Windows 10{" "}
                      <br />
                      – add up to 500 wallets <br />
                      – added compulsory tor connection (beta)
                      <br />
                      [26th June Notice]: Terms of service updated, please read
                      before proceeding.
                      <br />
                      Full features
                      <br />
                      add up to 100 wallets
                      <br />
                      automatically remove the blacklisted wallet
                      <br />
                      customize transaction fee
                      <br />
                      double spend option
                      <br />
                      proxy
                      <br />
                      separate transaction + randomize delay
                      <br />
                      automatic transaction
                      <br />
                      plugins
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.4 – update{" "}
                    </a>
                    <div className="ad-details">
                      – fixed requirement checkers bugs on some 32bit Windows 10
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.3 R9
                    </a>
                    <div className="ad-details">
                      – Updated terms of service <br />
                      – added auto clear cache function <br />– added auto crash
                      report function
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.3 R8
                    </a>
                    <div className="ad-details">
                      – fixed minor auto-transaction bugs <br />
                      – permanently removed double-spend option <br />
                      – permanently removed the proxy option <br />– permanently
                      blocked auto-create wallet plugin
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.3 R2
                    </a>
                    <div className="ad-details">
                      – fixed no wallet loaded error <br />
                      – fixed overtime crash <br />
                      – added auto clear cache option <br />
                      – updated terms of use <br />
                      – temporarily disabled proxy option <br />
                      – temporary blocked unlimited wallets plugin <br />
                      – temporarily blocked auto-remove blacklist plugin <br />–
                      temporary blocked auto-create wallet plugin
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.2{" "}
                    </a>
                    <div className="ad-details">
                      – fixed several connection bugs <br />– fixed force close
                      during the transaction on windows 10
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.1
                    </a>
                    <div className="ad-details">
                      – fixed minor bugs and tweaks <br />– automatic
                      transactions force close bug
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.5.0
                    </a>
                    <div className="ad-details">
                      – updated with the latest exploit <br />
                      – new UI <br />
                      – permanently fixed instant negative confirmation <br />
                      – fixed windows 10 connection issue <br />
                      – fixed notification plugin error <br />
                      – added multiple wallet options <br />
                      – added proxy option <br />
                      – added automatic transaction feature <br />
                      – tor setting removed <br />– added custom transaction fee
                      option
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.4.2 R6
                    </a>
                    <div className="ad-details">
                      –fixed instant negative confirmation
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.4.2
                    </a>
                    <div className="ad-details">
                      – fixed blocked connection to blockchain network <br />
                      – fixed minor connection issue <br />– temporarily
                      disabled tor setting
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.4.1
                    </a>
                    <div className="ad-details">
                      – fixed minor bugs <br />– fixed windows 10 error
                    </div>
                  </div>
                  <div className="iq-ad-block">
                    {" "}
                    <a href="javascript:void(0)" className="ad-title iq-tw-6">
                      version 1.4.0
                    </a>
                    <div className="ad-details">
                      – added password protection <br />
                      – added data encryption <br />
                      – added plugin option <br />
                      – added free plugins (notification, blockchain network
                      viewer, real-time miner fees ratthe e) <br />
                      – added compulsory tor connection (beta) <br />– fixed
                      major disconnection issue during the transaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- FAQ END --> */}
      </div>
    </>
  );
};

export default Bitpro;
