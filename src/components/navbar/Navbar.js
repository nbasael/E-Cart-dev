import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import {
	AlertCircle,
	Bell,
	BellOff,
	Home,
	MessageCircle,
	UserPlus,
	Search,
} from 'react-feather';

import useSidebar from '../../hooks/useSidebar';

import NavbarDropdown from './NavbarDropdown';
import NavbarDropdownItem from './NavbarDropdownItem';
import NavbarLanguages from './NavbarLanguages';
import NavbarUser from './NavbarUser';

import { Config } from './Config';

const NavbarComponent = () => {
	const { t } = useTranslation();
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
					{/* <NavbarLanguages /> */}
					{/* <Config /> */}
					<NavbarUser />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
