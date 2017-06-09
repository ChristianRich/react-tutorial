import React from 'react';
import ContactList from './ContactList';

export default class Main extends React.Component {
	render() {
		return (
			<div class="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
				<header class="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
					<div class="mdl-layout__header-row">
						<span class="mdl-layout-title">React Demo</span>
						<div class="mdl-layout-spacer"></div>
						<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
							<label class="mdl-button mdl-js-button mdl-button--icon" for="search">
								<i class="material-icons">search</i>
							</label>
							<div class="mdl-textfield__expandable-holder">
								<input class="mdl-textfield__input" type="text" id="search"/>
								<label class="mdl-textfield__label" for="search">Enter your query...</label>
							</div>
						</div>
					</div>
				</header>

				<div class="demo-ribbon"></div>

				<main class="demo-main mdl-layout__content">
					<div class="demo-container mdl-grid">
						<div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
						<div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
							<h3>React demo</h3>
							<div class="demo-crumbs mdl-color-text--grey-500">
								Christian &gt; Tutorial &gt; React
							</div>

							<div class="mdl-card__supporting-text">
								<p>A simple interface using React, Node.js, MongoDB to display and update contacts.</p>
							</div>

							<ContactList />
						</div>
					</div>

					<footer class="demo-footer mdl-mini-footer">
						<div class="mdl-mini-footer--left-section">
							<ul class="mdl-mini-footer--link-list">
								<li><a href="#">Help</a></li>
								<li><a href="#">Privacy and Terms</a></li>
								<li><a href="#">User Agreement</a></li>
							</ul>
						</div>
					</footer>
				</main>
			</div>
		);
	}
}
