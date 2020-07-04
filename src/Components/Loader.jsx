import React from "react";
import styled from "styled-components";

const LoaderDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function LoaderComp() {
	return (
		<LoaderDiv>
			<div className="d-flex justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</LoaderDiv>
	);
}
