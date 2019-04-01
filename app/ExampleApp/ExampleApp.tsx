
import * as React from "react";
import { BrowserRouter, Switch, Router, Redirect, Route } from 'react-router-dom'
import {WelcomePage} from "./Children/WelcomePage/WelcomePage";
import {ComponentsPage} from "./Children/ComponentsPage/ComponentsPage";
import {RoutingPage} from "./Children/RoutingPage/RoutingPage";
import {GulpfilePage} from "./Children/GulpfilePage/GulpfilePage";
import {DevServerPage} from "./Children/DevServerPage/DevServerPage";
import {HappyCodingPage} from "./Children/HappyCodingPage/HappyCodingPage";
import {AbstractComponent} from "../../component/AbstractComponent";

export interface ExampleAppProps {}

export class ExampleApp extends AbstractComponent<ExampleAppProps, {}>
{
	public constructor(props: ExampleAppProps, state: {})
	{
		super(props, state);
		let something = this.getPhusion();
		console.log('something', something);
	}

	render() {
		return <div>

			{/* Page container */}
			<div className="container">

				<div className="row">

					{/* Shelf - left */}
					<div className="shelf shelf--left">
						<div className="book book--green book--medium"></div>
						<div className="book book--yellow book--large"></div>
						<div className="book book--orange book--small"></div>
						<div className="book book--red book--large"></div>
						<div className="book book--grey book--medium"></div>
						<div className="book book--blue book--small"></div>
						<div className="book book--red book--large"></div>
					</div>

					{/* Clipboard */}
					<div className="clipboard">

						<h3 className="clipboard__title">
							React & Phusion
						</h3>

						<div className="hr"></div>

						<ul className="checklist">
							<li>
								<i className="far fa-check-square"></i> TypeScript
							</li>
							<li>
								<i className="far fa-check-square"></i> React.js + react-router
							</li>
							<li>
								<i className="far fa-check-square"></i> webpack
							</li>
							<li>
								<i className="far fa-check-square"></i> Browsersync
							</li>
						</ul>

					</div>

					{/* Clock */}
					<div className="clock">
						<div className="clock__hour-hand"></div>
						<div className="clock__minute-hand"></div>
						<div className="clock__second-hand"></div>
						<div className="clock__middle"></div>
					</div>

					{/* Shelf - right */}
					<div className="shelf shelf--right">
						<div className="file file--red"></div>
						<div className="file file--yellow"></div>
						<div className="file file--orange"></div>
						<div className="file file--green"></div>
					</div>

					{/* Desk */}
					<div className="desk">

						{/* Lamp */}
						<div className="lamp">
							<div className="lamp__shade"></div>
							<div className="lamp__top"></div>
							<div className="lamp__top-arm"></div>
							<div className="lamp__hinge"></div>
							<div className="lamp__bottom-arm"></div>
							<div className="lamp__base"></div>
						</div>

						{/* Computer */}
						<div className="computer">

							{/* Monitor */}
							<div className="computer__monitor">

								{/* Screen */}
								<div className="computer__screen">

									{/* Window */}
									<div className="window">

										{/* Window Header */}
										<div className="window__header">
											<span className="window__dot"></span>
											<span className="window__dot"></span>
											<span className="window__dot"></span>
										</div>

										{/* Window Content */}
										<div className="window__content">

											<BrowserRouter>
												<Switch>
													<Redirect exact from='/' to='/welcome'/>
													<Route path='/welcome' component={WelcomePage}/>
													<Route path='/components' component={ComponentsPage}/>
													<Route path='/routing' component={RoutingPage}/>
													<Route path='/gulpfile' component={GulpfilePage}/>
													<Route path='/dev-server' component={DevServerPage}/>
													<Route path='/happy-coding' component={HappyCodingPage}/>
												</Switch>
											</BrowserRouter>

										</div>
									</div>

								</div>
							</div>
							{/* Computer stand */}
							<div className="computer__stand"></div>
							{/* Computer base */}
							<div className="computer__base">
								<div className="computer__base-bottom"></div>
							</div>
							{/* Computer shadow */}
							<div className="computer__shadow">

							</div>
						</div>

						{/* Plant */}
						<div className="plant">

							<div className="plant__stem">
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
								<div className="plant__stem">
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
									<div className="plant__leaf"></div>
								</div>
							</div>


							<div className="plant__pot-top"></div>
							<div className="plant__pot">
								<div className="plant__pot-body"></div>
							</div>

						</div>

					</div>
				</div>


			</div>

		</div>;
	}
}

