import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  
} from "reactstrap";
import { NavLink } from "react-router-dom";


document.body.style.backgroundImage = "url('DND.jpg')";

export const MyNavbar = () => {
  
  return (
    <div >
      <Navbar expand="sm" dark color="dark" fixed="top">
        <NavbarBrand href=""></NavbarBrand>
       
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link" aria-current="page">
                Kezdolap
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" className="nav-link">
                Árak
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" className="nav-link">
                Kapcsolat
              </NavLink>
            </NavItem>

          </Nav>
          
          <Nav navbar>
            <NavItem>
              <NavLink to="login" className="nav-link">
                Bejelentkezés
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="register" className="nav-link">
                Regisztráció
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};