
import * as React from "react";
import * as ReactDOM from "react-dom";
import {ExampleApp} from "./app/ExampleApp/ExampleApp";

export class ReactApp
{
	public init(rootElementSelector: string)
	{
		ReactDOM.render(
			<ExampleApp/>,
			document.querySelector(rootElementSelector)
		);
	}
}