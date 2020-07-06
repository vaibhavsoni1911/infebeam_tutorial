import React, { Component } from "react";
import data from "../data.json";
import Filters from "./Filters";
import ProductListing from "./ProductListing";
import Loader from "./Loader";
export default class Product extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
			showLoader: false,
			isProductFiltered: false,
			selectedRam: [],
			hdd: "",
			location: "",
			storageCapacity: "",
		};
	}

	onRamChange = (e) => {
		if (e.target.checked) {
			this.setState({
				selectedRam: this.state.selectedRam.concat(e.target.value),
			});
		} else {
			if (this.state.selectedRam.includes(e.target.value)) {
				this.setState({
					selectedRam: this.state.selectedRam.filter(
						(ele) => ele !== e.target.value
					),
				});
			}
		}
	};

	onHardDiskChange = (e) => {
		this.setState({
			hdd: e.target.value,
		});
	};

	onLocationChange = (e) => {
		this.setState({
			location: e.target.value,
		});
	};

	onStorageChange = (e) => {
		this.setState({
			storageCapacity: e.target.value,
		});
	};

	onFilterSubmit = () => {
		this.setState(
			{
				showLoader: true,
			},
			() => {
				if (
					!this.state.selectedRam.length &&
					!this.state.hdd &&
					!this.state.location &&
					!parseInt(this.state.storageCapacity)
				) {
					this.setState({
						products: [],
						showLoader: false,
						isProductFiltered: true,
					});
				} else {
					let filteredProd = this.state.selectedRam.length
						? data.products.filter(
								(product) =>
									this.state.selectedRam.includes(product.RAM.substr(0, 3)) ||
									this.state.selectedRam.includes(product.RAM.substr(0, 4)) ||
									this.state.selectedRam.includes(product.RAM.substr(0, 5))
						  )
						: data.products;
					if (
						this.state.storageCapacity &&
						parseInt(this.state.storageCapacity)
					) {
						filteredProd = filteredProd.filter((prod) =>
							prod.HDD.includes(this.state.storageCapacity)
						);
					}
					if (this.state.hdd) {
						filteredProd = filteredProd.filter((prod) =>
							prod.HDD.includes(this.state.hdd)
						);
					}
					if (this.state.location) {
						filteredProd = filteredProd.filter(
							(prod) => prod.Location === this.state.location
						);
					}
					this.setState({
						products: filteredProd,
						showLoader: false,
						isProductFiltered: true,
					});
				}
			}
		);
	};
	render() {
		if (this.state.showLoader) {
			return <Loader />;
		}
		return (
			<div>
				<Filters
					onSubmit={this.onFilterSubmit}
					hdd={this.state.hdd}
					selectedRam={this.state.selectedRam}
					location={this.state.location}
					storageCapacity={this.state.storageCapacity}
					onHDDChange={this.onHardDiskChange}
					onRamChange={this.onRamChange}
					onLocationChange={this.onLocationChange}
					onStorageChange={this.onStorageChange}
				/>
				{this.state.isProductFiltered && !this.state.products.length && (
					<div style={{ marginTop: "50px", textAlign: "center" }}>
						No Product available
					</div>
				)}
				{this.state.isProductFiltered && this.state.products.length ? (
					<div style={{ marginTop: "50px", textAlign: "center" }}>
						<ProductListing products={this.state.products} />
					</div>
				) : null}
			</div>
		);
	}
}
