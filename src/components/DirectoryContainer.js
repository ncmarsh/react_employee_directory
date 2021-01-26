import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Employee from "./Employee";
import API from "../utils/API";

class DirectoryContainer extends React.Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount() {
        this.searchEmployees("?results=100");
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <SearchBar 
                            value={this.state.search}
                            handleInputChange={this.handleInputChange} 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Table>
                            {this.state.result.map(item =>                             
                                <Employee
                                    key={item.id}
                                    image={item.picture.medium}
                                    name={`${item.name.first} ${item.name.last}`}
                                    phone={item.phone}
                                    email={item.email}
                                    dob={item.dob.date}
                                />)}
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DirectoryContainer;