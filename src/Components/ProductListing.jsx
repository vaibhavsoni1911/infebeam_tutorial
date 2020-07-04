import React from "react";
import { Table } from "react-bootstrap";

export default function ProductListing(props) {
	return (
		<>
			<div style={{ maxHeight: "500px", overflowY: "scroll" }}>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Model</th>
							<th>RAM</th>
							<th>HDD</th>
							<th>Location</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{props.products.map((product, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{product.Model}</td>
								<td>{product.RAM}</td>
								<td>{product.HDD}</td>
								<td>{product.Location}</td>
								<td>{product.Price}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</>
	);
}
