import React from 'react'

export default function Header() {
	return (
		<div className="header">
			<div className="calc">calc</div>
			<div className="theme">THEME</div>
			<div className="themes">
				<div className="themes-container">
					<div className="themeOne">
						<button className="one btn-theme">1</button>
					</div>
					<div className="themeTwo">
						<button className="two btn-theme">2</button>
					</div>
					<div className="themeThree">
						<button className="three btn-theme">3</button>
					</div>
				</div>
				<div className="toggle-btn-container">
					<button className="toggle-btn" />
				</div>
			</div>
		</div>
	)
}
