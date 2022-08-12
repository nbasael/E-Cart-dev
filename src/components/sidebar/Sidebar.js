import React from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import useSidebar from '../../hooks/useSidebar';
import SidebarFooter from './SidebarFooter';
import SidebarNav from './SidebarNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ items, showFooter = true }) => {
	const { isOpen } = useSidebar();

	return (
		<nav className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
			<div className="sidebar-content">
				<PerfectScrollbar>
					<a className="sidebar-brand" href="/v1/home">
						<span className="align-middle me-3">
							<FontAwesomeIcon icon={faCartArrowDown} /> 
							E-Cart Dev
						</span>
					</a>
					<SidebarNav items={items} />
					{!!showFooter && <SidebarFooter />}
				</PerfectScrollbar>
			</div>
		</nav>
	);
};

export default Sidebar;
