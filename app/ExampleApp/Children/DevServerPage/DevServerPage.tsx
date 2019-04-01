
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface DevServerPageProps {}

export class DevServerPage extends AbstractComponent<DevServerPageProps, {}>
{
	public render()
	{
		return <div>

			<div className="code">

				<div className="code__line"></div>
				{/* // You're all set... */}
				<div className="code__line">
					<span className="code__comment">// Dev Server </span>
				</div>
				<div className="code__line">
					<span className="code__comment">// Powered by Browsersync, with</span>
				</div>
				<div className="code__line">
					<span className="code__comment">// live reloading by default.</span>
				</div>

				{/* Empty line --> */}
				<div className="code__line"></div>
				{/* while (!succeed) { */}
				<div className="code__line">
					<span className="code__keyword">function</span> <span className="code__function">serve</span><span className="code__parens">(</span><span className="code__parens">)</span>
				</div>
				<div className="code__line">
					<span className="code__brace">{"{"}</span>
				</div>
				<div className="code__line">
					<span className="code__space">&nbsp;</span>
					<span className="code__keyword">return</span> <span
					className="code__keyword"
				>new</span> Promise<span className="parens">(</span>resolve, reject<span
					className="parens"
				>)</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__brace">{"{"}</span>
				</div>
				<div className="code__line">
					<span className="code__space">&nbsp;</span>
					&nbsp;&nbsp;devServerTask.<span
					className="code__function"
				>run</span><span className="parens">(</span><span
					className="parens"
				>)</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__brace">}</span>
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

				<Link to="/happy-coding" className="computer__screen-cta">Next</Link>
			</div>

		</div>;
	}
}
