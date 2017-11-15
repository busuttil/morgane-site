import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLink from 'gatsby-link';
import classNames from 'classnames';

import Head from './head';

import './header.scss';

class Header extends Component {
  constructor() {
    super();
    if (typeof window !== `undefined`) {
      this.state = {
        menuFixed: window.pageYOffset,
        width: window.innerWidth,
        menuOpened: false
      }
    }
  }

  componentWillMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.handleWindowSizeChange);
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.handleWindowSizeChange);
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  handleWindowSizeChange = () => {
    if (typeof window !== `undefined`) {
      this.setState({ width: window.innerWidth });
    }
  }

  handleWindowScroll = () => {
    if (typeof window !== `undefined`) {
      this.setState({ menuFixed: window.pageYOffset });
    }
  }

  render() {
    if (typeof window !== `undefined`) {
      const isMobile = this.state.width <= 765;
      const isFixed = this.state.menuFixed >= 300;
      const params = () => this.setState({menuOpened: !this.state.menuOpened});


      const headerClass = classNames('header', {
        'header--opened': this.state.menuOpened && isMobile === true,
        'header--fixed': isFixed
      });

      return (
        <div className="App">
          <Head />
          <div className={headerClass}>
            <div className="header__menu-icons" onClick={params} />
            <ul className="header__menu">
              <li className="header__menu-item" onClick={params}>
                <NavLink exact activeClassName="header__menu-item--selected" to="/">Accueil</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/psychologie">Qu'est-ce qu'un psychologue <span>clinicien ?</span></NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/me-connaitre">Me connaître</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/pourquoi-consulter">Pourquoi consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/qui-consulter">Qui consulter ?</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/therapie">Thérapie</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
                <NavLink activeClassName="header__menu-item--selected" to="/tarifs">Tarifs</NavLink>
              </li>
              <li className="header__menu-item" onClick={params}>
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
