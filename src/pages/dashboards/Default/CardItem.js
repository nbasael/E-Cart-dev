import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

export const CardItem = () => {
	return (
		<Col xl={3} lg={6}>
			<Card>
				<Card.Img variant="top" src="https://picsum.photos/286/180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};
