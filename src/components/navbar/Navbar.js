import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import useSidebar from '../../hooks/useSidebar';

import NavbarUser from './NavbarUser';

import { Config } from './Config';

const NavbarComponent = () => {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<Navbar variant="light" expand className="navbar-bg">
			<span
				className="sidebar-toggle d-flex"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<i className="hamburger align-self-center" />
			</span>

			<Navbar.Collapse>
				<Nav className="navbar-align">
					<Config />
					<NavbarUser />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
