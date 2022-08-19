import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faCog, faPalette } from '@fortawesome/free-solid-svg-icons';

// Controles del sidebar
import { useLocation } from 'react-router-dom';

import {
	SIDEBAR_POSITION,
	SIDEBAR_BEHAVIOR,
	LAYOUT,
	THEME,
} from '../../constants';

import useOuterClick from '../../hooks/useOuterClick';
import useTheme from '../../hooks/useTheme';
import useSidebar from '../../hooks/useSidebar';
import useLayout from '../../hooks/useLayout';

// Constantes a usar
const themeOptions = [
	{
		name: 'Default',
		value: THEME.DEFAULT,
	},
	{
		name: 'Colorido',
		value: THEME.COLORED,
	},
	{
		name: 'Dark',
		value: THEME.DARK,
	},
	{
		name: 'Light',
		value: THEME.LIGHT,
	},
];

const sidebarPositionOptions = [
	{
		name: 'Izquierda',
		value: SIDEBAR_POSITION.LEFT,
	},
	{
		name: 'Derecha',
		value: SIDEBAR_POSITION.RIGHT,
	},
];

const sidebarBehaviorOptions = [
	{
		name: 'Sticky',
		value: SIDEBAR_BEHAVIOR.STICKY,
	},
	{
		name: 'Fijo',
		value: SIDEBAR_BEHAVIOR.FIXED,
	},
	{
		name: 'Compacto',
		value: SIDEBAR_BEHAVIOR.COMPACT,
	},
];

const layoutOptions = [
	{
		name: 'Completo',
		value: LAYOUT.FLUID,
	},
	{
		name: 'En caja',
		value: LAYOUT.BOXED,
	},
];

const useQuery = () => new URLSearchParams(useLocation().search);

export const Config = () => {
	const [isOpen, setIsOpen] = useState(false);

	const query = useQuery();
	const { theme, setTheme } = useTheme();
	const { position, setPosition, behavior, setBehavior } = useSidebar();
	const { layout, setLayout } = useLayout();

	const innerRef = useOuterClick(() => {
		setIsOpen(false);
	});

	const setSettingByQueryParam = (name, set) => {
		const value = query.get(name);
		if (value) {
			set(value);
		}
	};

	// Read from query parameter (e.g. ?theme=dark)
	// only for demo purposes
	useEffect(() => {
		setSettingByQueryParam('theme', setTheme);
		setSettingByQueryParam('sidebarPosition', setPosition);
		setSettingByQueryParam('sidebarBehavior', setBehavior);
		setSettingByQueryParam('layout', setLayout);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			ref={innerRef}
			className={`settings js-settings ${isOpen ? 'open' : ''}`}
		>
			<Button
				variant="outline-primary"
				className="me-2 nav-item"
				align="end"
				onClick={() => setIsOpen(true)}
			>
				<FontAwesomeIcon icon={faCog} />
			</Button>

			<div className="settings-panel">
				<div className="settings-content">
					<div className="settings-title d-flex align-items-center">
						<button
							type="button"
							className="btn-close float-right js-settings-toggle"
							aria-label="Close"
							onClick={() => setIsOpen(false)}
						></button>
						<h4 className="mb-0 ms-2 d-inline-block">
							<FontAwesomeIcon
								icon={faPalette}
								className="me-1"
							/>{' '}
							Personalize su web!
						</h4>
					</div>
					<div className="settings-body">
						<div className="mb-3">
							<span className="d-block font-size-lg fw-bold">
								Tema de la pagina
							</span>
							<span className="d-block text-muted mb-2">
								Seleccione el color que desea que la web se
								presente.
							</span>
							<div className="row g-0 text-center mx-n1 mb-2">
								{themeOptions.map(({ name, value }) => (
									<div className="col-6" key={value}>
										<label className="mx-1 d-block mb-1">
											<input
												className="settings-scheme-label"
												type="radio"
												name="theme"
												value={value}
												checked={theme === value}
												onChange={() => setTheme(value)}
											/>
											<div className="settings-scheme">
												<div
													className={`settings-scheme-theme settings-scheme-theme-${value}`}
												></div>
											</div>
										</label>
										{name}
									</div>
								))}
							</div>
						</div>
						<hr />
						<div className="mb-3">
							<span className="d-block font-size-lg fw-bold">
								Posicion de la barra lateral
							</span>
							<span className="d-block text-muted mb-2">
								Seleccion en que posicion desea que la barra
								lateral se dibuje.
							</span>
							<div>
								{sidebarPositionOptions.map(
									({ name, value }) => (
										<label className="me-1" key={value}>
											<input
												className="settings-button-label"
												type="radio"
												name="sidebarPosition"
												value={value}
												checked={position === value}
												onChange={() =>
													setPosition(value)
												}
											/>
											<div className="settings-button">
												{name}
											</div>
										</label>
									)
								)}
							</div>
						</div>
						<hr />
						<div className="mb-3">
							<span className="d-block font-size-lg fw-bold">
								Comportamiento barra lateral
							</span>
							<span className="d-block text-muted mb-2">
								Cambie el comportamiento de la barra lateral.
							</span>
							<div>
								{sidebarBehaviorOptions.map(
									({ name, value }) => (
										<label className="me-1" key={value}>
											<input
												className="settings-button-label"
												type="radio"
												name="sidebarBehavior"
												value={value}
												checked={behavior === value}
												onChange={() =>
													setBehavior(value)
												}
											/>
											<div className="settings-button">
												{name}
											</div>
										</label>
									)
								)}
							</div>
						</div>
						<hr />
						<div className="mb-3">
							<span className="d-block font-size-lg fw-bold">
								Contenedor
							</span>
							<span className="d-block text-muted mb-2">
								Seleccion como desea mostrar la web.
							</span>
							<div>
								{layoutOptions.map(({ name, value }) => (
									<label className="me-1" key={value}>
										<input
											className="settings-button-label"
											type="radio"
											name="layout"
											value={value}
											checked={layout === value}
											onChange={() => setLayout(value)}
										/>
										<div className="settings-button">
											{name}
										</div>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
