import React, { Component } from "react";
//import ReactBootstrapSlider from "react-bootstrap-slider";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import data from "../data.json";

const storageOptions = data.filter.Storage;
const ramOptions = data.filter.RAM;
const hardDiskTypes = data.filter["Harddisk type"];
const Locations = data.filter.Location;

const FilterSubmitWrapper = styled.div`
	justify-content: center;
	text-align: center;
	margin-top: 30px;
`;

export default class Filters extends Component {
	render() {
		return (
			<div>
				{/*

                <ReactBootstrapSlider
					ticks={[0, 250, 500, 1, 2, 3, 4, 8, 12, 24, 48, 72]}
					ticks_labels={[
						"0",
						"250GB",
						"500GB",
						"1TB",
						"2TB",
						"3TB",
						"4TB",
						"8TB",
						"12TB",
						"24TB",
						"48TB",
						"72TB",
					]}
					min={0}
				/> */}
				<Card>
					<Card.Header as="h5">Select filters to get product</Card.Header>
					<Card.Body>
						<Row>
							<Col>
								<div>
									Storage:
									<select
										name="storage"
										onChange={this.props.onStorageChange}
										value={this.props.storageCapacity}
									>
										<option value="">--- Select Storage ---</option>
										{storageOptions.map((storage, index) => (
											<option key={index} value={storage}>
												{storage}
											</option>
										))}
									</select>
								</div>
							</Col>
							<Col>
								<div>
									Hard Disk:
									{
										<select
											onChange={this.props.onHDDChange}
											value={this.props.hdd}
										>
											<option value="">--- Select Hard Disk Type ---</option>
											{hardDiskTypes.map((hd, index) => (
												<option key={index} value={hd}>
													{hd}
												</option>
											))}
										</select>
									}
								</div>
							</Col>
							<Col>
								<div>
									Location:
									{
										<select
											onChange={this.props.onLocationChange}
											value={this.props.location}
										>
											<option value="">--- Select Location ---</option>
											{Locations.map((location, index) => (
												<option key={index} value={location}>
													{location}
												</option>
											))}
										</select>
									}
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									RAM :{" "}
									{ramOptions.map((ram, index) => (
										<>
											<Form.Check
												type="checkbox"
												key={index}
												value={ram}
												label={ram}
												onChange={this.props.onRamChange}
												checked={this.props.selectedRam.includes(ram)}
												inline
											/>
										</>
									))}{" "}
								</div>
							</Col>
						</Row>

						<FilterSubmitWrapper>
							<Button
								variant="primary"
								onClick={this.props.onSubmit}
								disabled={
									!this.props.storageCapacity &&
									!this.props.selectedRam.length &&
									!this.props.hdd &&
									!this.props.storageCapacity &&
									!this.props.location
								}
							>
								Get Products
							</Button>
						</FilterSubmitWrapper>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
