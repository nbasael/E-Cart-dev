import React from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from '../components/Wrapper';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/Main';
import Navbar from '../components/navbar/Navbar';
import Content from '../components/Content';

import dashboardItems from '../components/sidebar/dashboardItems';

const Dashboard = ({ children }) => (
	<React.Fragment>
		<Wrapper>
			<Sidebar items={dashboardItems} showFooter={false} />
			<Main>
				<Navbar />
				<Content>
					{children}
					<Outlet />
				</Content>
			</Main>
		</Wrapper>
	</React.Fragment>
);

export default Dashboard;
