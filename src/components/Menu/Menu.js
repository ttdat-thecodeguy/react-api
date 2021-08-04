import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, useHistory } from 'react-router-dom'

const menus = [
    {
        name: "Trang Chủ",
        to: "/",
        exact: true
    },{
        name: "Quản Lí Diễn Viên",
        to: "/actor-list",
        exact: false
    },{
        name: "Thông Tin User",
        to: "/user-info",
        exact: false
    }
];
const MenuLink = ({label , to, active}) => {
    return (
        <Route 
            path={to}
            exact={active}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                        <li className={`nav-item ${active}`}>
                            <Link to={to} className="nav-link">{label}</Link>
                        </li>
                )
            }}  />
    );
}

const showMenus = (menus)=>{
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu, idx) => {
        return( <MenuLink key={idx} label={menu.name} to={menu.to} active={menu.exact}></MenuLink> )
        })
    }
    return result
}

const Menu = () => {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" >Admin Dashboard</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                       {showMenus(menus)}
                    </ul>
                    
                </div>
            </nav>          
        );
}

export default Menu;