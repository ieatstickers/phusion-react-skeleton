
import * as React from "react";
import {PhusionInterface} from "../module/Phusion/PhusionInterface";

declare const phusion: PhusionInterface;

export class AbstractComponent<P, S> extends React.Component<P, S>
{
	public getPhusion(): PhusionInterface
	{
		return window['phusion'];
	}
}
