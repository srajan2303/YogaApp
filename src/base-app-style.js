import styled from 'styled-components';
import { palette, font } from 'styled-theme';
import { colors } from './constants/color-pallete';
const BaseAppHolder = styled.div`
	/* CircularStd */

	@font-face {
		font-family: 'CircularStd';
		font-style: normal;
		font-display: swap;
		font-weight: 400;
		src: url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Book.woff2)
				format('woff2'),
			url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Book.woff)
				format('woff'),
			url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Book.ttf)
				format('truetype');
	}

	/* CircularStd Bold*/

	height:100%;
	@font-face {
		font-family: 'CircularStd';
		font-style: normal;
		font-display: swap;
		font-weight: 700;
		src: url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Bold.woff2)
				format('woff2'),
			url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Bold.woff)
				format('woff'),
			url(https://storage.googleapis.com/assets.twicapp-production.twic.ai/fonts/circular_std/CircularStd-Bold.ttf)
				format('truetype');
	}

	font-family: ${font('primary', 0)};

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a,
	p,
	li,
	input,
	textarea,
	span,
	div,
	img,
	svg {
		&::selection {
			background: ${palette('primary', 0)};
			color: ${colors.background};
		}
	}

	.ant-row:not(.ant-form-item) {
		${'' /* margin-left: -8px;
    margin-right: -8px; */};
		&:before,
		&:after {
			display: none;
		}
	}

	.ant-row > div {
		padding: 0;
	}

	.isoLeftRightComponent {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.isoCenterComponent {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.twic-icon {
		margin-right: 5px;
		font-size: 16px;
	}

	// p {
	// 	margin-bottom: 5px;
	// }
	.cycleArrow{
		display:flex;
		position:absolute;
		top: 0.65rem;
		right: 1%;
		justify-content: end;
		span{
			display:flex;
			justify-content: end;	
			font-size:20px;
			font-weight:600;
			margin-right:1rem;
		}
		.ant-tag-has-color{
			border-radius:8px;
			padding: 2px 10px;
		}
		img{
			width: 25px;
			margin-right: 10px;
		}
		.ant-tag{
			opacity: 0.9;
		}
		.card-type{
			border-radius: 4px;
        	border: solid 1px #6584a0;
        	color: #6584a0;
        	background-color: ${colors.background};
        	padding:0px 3px;
        	font-size:12px;
			margin-right: 0.5rem;
			margin-top: 0.5rem;
		}
	}
	
`;

export default BaseAppHolder;
