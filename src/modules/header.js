import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLink from 'gatsby-link';
import classNames from 'classnames';

import Head from './head';

import './header.scss';


export function isMobile() {
  if (typeof window !== `undefined`) {
    const sizeWindow = window.innerWidth;
    if (sizeWindow <= 765) {
      return true;
    }
    return false;
  }
}

class Header extends Component {
  constructor() {
    super();
    if (typeof window !== `undefined`) {
      this.state = {
        menuFixed: window.pageYOffset,
        menuOpened: false
      }
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0)
    }
  }

  componentWillMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  handleWindowScroll = () =>{
    if (typeof window !== `undefined`) {
      this.setState({ menuFixed: window.pageYOffset });
    }
  }

  handleClick() {
    if (typeof window !== `undefined` && isMobile()) {
      this.setState({menuOpened: !this.state.menuOpened});
    }
  }

  render() {
    if (typeof window !== `undefined`) {
      const isFixed = this.state.menuFixed >= 300;

      const headerClass = classNames('header', {
        'header--opened': this.state.menuOpened && isMobile(),
        'header--fixed': isFixed
      });

      return (
        <div className="App">
          <Head />
          <div className={headerClass}>
            <div className="header__menu-icons" onClick={this.handleClick.bind(this)} />
            <ul className="header__menu">
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink exact activeClassName="header__menu-item--selected" to="/">Accueil</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/psychologie">Qu'est-ce qu'un psychologue <span>clinicien ?</span></NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/me-connaitre">Me connaître</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/pourquoi-consulter">Pourquoi consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/qui-consulter">Qui consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/therapie">Thérapie</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/tarifs">Tarifs</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/galerie">Galerie</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )
    }

    return(<div></div>);
  }
}

export default Header;
