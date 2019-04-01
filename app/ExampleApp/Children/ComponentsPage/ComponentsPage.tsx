
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface ComponentsPageProps {}

export class ComponentsPage extends AbstractComponent<ComponentsPageProps, {}>
{
	public render()
	{
		return <div>

			<div className="code">

				<div className="code__line"></div>

				{/* // You're all set... */}
				<div className="code__line">
					<span className="code__comment">// TypeScript React Components </span>
				</div>
				{/* Empty line */}
				<div className="code__line"></div>
				{/* while (!succeed) { */}
				<div className="code__line">
					<span className="code__keyword">class</span> NavComponent <span className="code__keyword">extends</span> AbstractComponent
				</div>
				<div className="code__line">
					<span className="code__brace">{ "{" }</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__keyword">public</span> <span
					className="code__property"
				>render</span><span className="code__parens">()</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__brace">{ "{" }</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="code__keyword">return</span> <span className="code__function">{'<div>'}</span>Hello, World!<span className="code__function">{'</div>'}</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;<span className="code__brace">{ "}" }</span>
				</div>
				<div className="code__line">
					&nbsp;&nbsp;...
				</div>
				{/* Empty lines */}
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>
				<div className="code__line"></div>

				<Link to="/routing" className="computer__screen-cta">Next</Link>

			</div>

		</div>;

	}
}