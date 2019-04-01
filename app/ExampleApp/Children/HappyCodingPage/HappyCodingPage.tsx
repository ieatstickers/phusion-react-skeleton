
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface HappyCodingPageProps {}

export class HappyCodingPage extends AbstractComponent<HappyCodingPageProps, {}>
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
					<span className="code__comment">// Happy coding! </span>
				</div>

				{/* Empty line */}
				<div className="code__line"></div>
				{/* while (!succeed) { */}
				<div className="code__line">
					<span className="code__keyword">while</span>
					<span className="code__parens">(</span>!succeed<span className="code__parens">)</span>
					<span className="code__brace">{"{"}</span>
				</div>
				{/* tryAgain(); */}
				<div className="code__line">
					<span className="code__space">&nbsp;</span>
					<span className="code__function">tryAgain</span><span className="parens">(</span><span className="parens">)</span><span className="code__semi-colon">;</span>
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

			</div>

			<Link to="/welcome" className="computer__screen-cta">Reset</Link>

		</div>;
	}

}
