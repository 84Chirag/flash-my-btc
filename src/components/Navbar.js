import React, { useEffect } from "react";
import FLASHMYBTC from "../img/logos/FLASHMYBTC-LOGO-WHITE (1).png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => { }, [location]);

  const logout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  return (
    <div className="mx-5 mb-3">
      <div className="row" id="top1">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light nav-sticky bg-dark navbar-dark sticky-top">
            <Link to="/" className="navbar-brand">
              <img src={FLASHMYBTC} className="img-fluid" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="navbar-toggler-icon"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav1 mr-auto w-100 justify-content-end" style={{ fontSize: '15px' }}>
                <li className="nav-item me-3">
                  <Link to="/bitpro" className={`nav-link ${location.pathname === '/bitpro' ? 'active fw-bolder' : ""}`}>
                    Bitpro
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/bitgen" className={`nav-link ${location.pathname === '/bitgen' ? 'active fw-bolder' : ""}`}>
                    Bitgen
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/vector" className={`nav-link ${location.pathname === '/vector' ? 'active fw-bolder' : ""}`}>
                    Vector Attack 76
                  </Link>
                </li>
                <li className="nav-item me-3">
                  {!localStorage.getItem('auth-token') ? (<a
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target=".iq-login"
                    href="#"
                  >
                    My account
                  </a>) : (
                    <>
                      <button onClick={logout} className={`btn btn-transparent`} style={{ color: 'white', fontWeight: 'bold', marginLeft: '-10px', marginTop: '1px' }} >
                        logout
                      </button>
                      <Link to="/profile" >
                        <FontAwesomeIcon icon={faUser} size="xl" className="ms-1" style={{ cursor: 'pointer',color:'white' }} />
                      </Link>
                    </>
                  )}
                </li>
                <li className="nav-item me-1">
                  {/* <Link to='/showcart' className="nav-link">Show Cart</Link> */}
                  <Link to="/showcart" className={`nav-link ${location.pathname === '/showcart' ? 'active fw-bolder' : ""}`}>
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
