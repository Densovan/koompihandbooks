import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Button, Radio } from "antd";

function Navbar() {
  const [open, setOpen] = useState({
    visible: false
  });
  const showDrawer = () => {
    setOpen({
      visible: true
    });
  };
  const onClose = () => {
    setOpen({
      visible: false
    });
  };
  return (
    <div className="navbar-button">
      <Drawer
        width={720}
        onClose={onClose}
        visible={open.visible}
        bodyStyle={{ paddingBottom: 80 }}
        placement="left"
      >
        <h1 className="title-sidebar">KOOMPI EMPLOYEE HANDBOOKS</h1>
        <h2>Everything you need to know about making a career at KOOMPI</h2>
        <hr></hr>
        <div style={{ lineHeight: "18px" }}>
          <h3>CHAPTER 1</h3>
          <NavLink exact activeStyle={{ color: "white" }} to="/">
            <h1>KOOMPI is You</h1>
          </NavLink>
        </div>
        <div style={{ lineHeight: "18px" }}>
          <h3>CHAPTER 2</h3>
          <NavLink exact activeStyle={{ color: "white" }} to="/chapter2">
            <h1>What We Stand For</h1>
          </NavLink>
        </div>
      </Drawer>
      <Button onClick={showDrawer}>KOOMPI EMPLOYEE KOOMPI</Button>
    </div>
  );
}

export default Navbar;
