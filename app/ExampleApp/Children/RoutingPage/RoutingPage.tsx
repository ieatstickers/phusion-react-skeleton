
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface RoutingPageProps {}

export class RoutingPage extends AbstractComponent<RoutingPageProps, {}>
{
	public render()
	{
		return <div>

			{/* Code */}
			<div className="code">
				{/* Empty line */}
				<div className="code__line"></div>
				{/* // You're all set... */}
				<div className="code__line">
					<span className="code__comment">// Routing using react-router</span>
				</div>

				{/* Empty line */}
				<div className="code__line"></div>

				{/* while (!succeed) { */}
				<div className="code__line">
					<span className="code__function">{'<Switch>'}</span>:
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__function">{'<Route'}</span> path=<span className="code__string">{'"/"'}</span> component{'={'}<span className="code__string">{'WelcomePage'}</span>{'}'}<span className="code__function">/></span>
				</div>
				<div className="code__line">
					<span className="code__function">{'</Switch>'}</span>:
				</div>

				{/* Empty lines */}
				<div className="code__line"></div>

				<div className="code__line"></div>
				<div className="code__line"></div>

				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>

				<Link to="/gulpfile" className="computer__screen-cta">Next</Link>

			</div>


		</div>
	}

}
