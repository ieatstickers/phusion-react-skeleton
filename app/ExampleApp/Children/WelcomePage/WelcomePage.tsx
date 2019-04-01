
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface WelcomePageProps {}

export class WelcomePage extends AbstractComponent<WelcomePageProps, {}>
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
					<span className="code__comment">// You're all set! </span>
				</div>
				<div className="code__line">
					<span className="code__comment">// This project includes everything you </span>
				</div>
				<div className="code__line">
					<span className="code__comment">// need to get started including a gulpfile</span>
				</div>
				<div className="code__line">
					<span className="code__comment">// and a dev server with live reloading. </span>
				</div>

				{/* Empty line */}
				<div className="code__line"></div>
				{/* while (!succeed) { */}
				<div className="code__line">
					<span className="code__keyword">if</span>
					<span className="code__parens">(</span>readyToStart<span className="code__parens">)</span>
					<span className="code__brace">{"{"}</span>
				</div>
				{/* tryAgain(); */}
				<div className="code__line">
					<span className="code__space">&nbsp;</span>
					<span className="code__function">clickNext</span><span className="parens">(</span><span className="parens">)</span><span className="code__semi-colon">;</span>
				</div>
				{/* } */}
				<div className="code__line">
					<span className="code__brace">{"}"}</span>
				</div>
				{/* Empty lines */}
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>

				<Link to="/components" className="computer__screen-cta">Next</Link>

			</div>


		</div>
	}
}
