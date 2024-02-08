import React from 'react';
import LoaderComponent from './styles/loader.style';

export default (props) => (
	<LoaderComponent style={{position: props.position || "absolute"}}>
		<svg className="isoContentLoader" viewBox="0 0 50 50">
			<circle
				className="isoContentLoaderCircle"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="3.6"
			/>
		</svg>
	</LoaderComponent>
);
