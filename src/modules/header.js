import React, { Component } from 'react';
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
                <NavLink exact activeClassName="header__menu-item--selected" to="/" alt="accueil psychologue lyon">Accueil</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/psychologie" alt=" Qu'est-ce qu'un psychologue">Qu'est-ce qu'un psychologue <span>clinicien ?</span></NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/me-connaitre" alt="psychologue clinicienne lyon, psychologue lyon">Me connaître</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/pourquoi-consulter" alt="pourquoi consulter un psychologue">Pourquoi consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/qui-consulter" alt="qui consulter à lyon">Qui consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/therapie" alt="thérapie, psychologue lyon">Thérapie</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/tarifs" alt="Tarifs, cabinet psy lyon, psychologue lyon">Tarifs</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/galerie" alt="photo cabinet psychologue lyon, psy lyon">Galerie</NavLink>
              </li>
              <li className="header__menu-item" onClick={this.handleClick.bind(this)}>
                <NavLink activeClassName="header__menu-item--selected" to="/contacts" alt="adresse du cabinet psychologue à lyon, psy lyon 2">Contacts</NavLink>
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
