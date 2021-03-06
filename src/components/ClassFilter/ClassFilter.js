import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'


class ClassFilter extends Component {
    constructor(props) {
		super(props);

		this.state = {
            maxPrice: 'Max Price...',
            minRating: 'Min Rating...',
            classCategory: 'Class Category...'
		};
    }
    
    filterResults(e) {
        const filterType = e.target.id;
        if (filterType === 'maxPrice') {
            this.setState({maxPrice: e.target.value}, () => {
                this.props.filterResults(this.state);
            });
        }
        else if (filterType === 'minRating') {
            this.setState({minRating: e.target.value}, () => {
                this.props.filterResults(this.state);
            });
        }
        else {
            this.setState({classCategory: e.target.value}, () => {
                this.props.filterResults(this.state);
            });
        }
    }

    render() {
        return(
            <Form className="class-filter" >
                <Form.Group controlId="maxPrice" onChange={this.filterResults.bind(this)}>
                    <Form.Control as="select" >
                        <option value={undefined}>Max Price...</option>
                        <option value={50}>$50</option>
                        <option value={100}>$100</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="minRating" onChange={this.filterResults.bind(this)}>
                    <Form.Control as="select" >
                        <option value={undefined}>Min Rating...</option>
                        <option>8</option>
                        <option>9</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="classCategory" onChange={this.filterResults.bind(this)}>
                    <Form.Control as="select" >
                        <option value={undefined}>Class Category...</option>
                        <option>Music</option>
                        <option>Art</option>
                        <option>Language</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
};

export default ClassFilter; 