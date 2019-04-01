
import * as React from 'react';
import {Link} from 'react-router-dom';
import {AbstractComponent} from "../../../../component/AbstractComponent";

export interface GulpfilePageProps {}

export class GulpfilePage extends AbstractComponent<GulpfilePageProps, {}>
{
	render()
	{
		return <div>

			<div className="code">

				{/* Code */}
				<div className="code">
					{/* Empty line */}
					<div className="code__line"></div>
					{/* // You're all set... */}
					<div className="code__line">
						<span className="code__comment">// Complete Gulpfile </span>
					</div>
					<div className="code__line">
						<span className="code__comment">// Tasks to handle scss, js, webpack builds</span>
					</div>
					<div className="code__line">
						<span className="code__comment">//  and Phusion config merging.</span>
					</div>

					{/* Empty line */}
					<div className="code__line"></div>
					{/* while (!succeed) { */}
					<div className="code__line">
						<span className="code__keyword">function</span> <span className="code__function">scss</span><span className="code__parens">(</span><span className="code__parens">)</span>
					</div>
					<div className="code__line">
						<span className="code__brace">{"{"}</span>
					</div>
					<div className="code__line">
						<span className="code__space">&nbsp;</span>
						<span className="code__keyword">return</span> <span className="code__function">src</span><span className="parens">(</span><span className="code__string">"assets/scss/**/*.scss"</span><span className="parens">)</span><span className="code__semi-colon">;</span>
					</div>
					<div className="code__line">
						<span className="code__space">&nbsp;</span>
						&nbsp;&nbsp;.<span className="code__function">pipe</span><span className="parens">(</span><span className="code__function">sass</span><span className="parens">(</span><span className="parens">)</span><span className="parens">)</span>
					</div>
					{/*.pipe(dest(scssDestDirPath));*/}
					<div className="code__line">
						<span className="code__space">&nbsp;</span>
						&nbsp;&nbsp;.<span className="code__function">pipe</span><span className="parens">(</span><span className="code__function">dest</span><span className="parens">(</span><span className="code__string">"public/assets/"</span><span className="parens">)</span><span className="parens">)</span><span className="code__semi-colon">;</span>
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


					<Link to="/dev-server" className="computer__screen-cta">Next</Link>
				</div>

			</div>

		</div>;
	}
}
