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
        result: [],
        filteredList: [],
        sort: ""
    };

    componentDidMount() {
        this.searchEmployees("?results=100");
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ 
                result: res.data.results,
                filteredList: res.data.results }))
            .catch(err => console.log(err));
    };

    colOrder = () => {
        if (this.state.sort === "" || this.state.sort === "asc") {
            // sort by first name A-Z
            let sorted = this.state.filteredList.sort((a,b) => {
                if (a.name.first < b.name.first) return -1;
                else if (a.name.first > b.name.first) return 1;
                return 0;
            });
            this.setState({ filteredList: sorted, sort: "desc" });
        } else {
            // sort by last name Z-A
            let sorted = this.state.filteredList.sort((a,b) => {
                if (a.name.first > b.name.first) return -1;
                else if (a.name.first < b.name.first) return 1;
                return 0;
            });
            this.setState({ filteredList: sorted, sort: "asc" });
        }
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const filteredList = this.state.result.filter(
            item => {
                let names = Object.values(item).join("");
                return names.indexOf(value) !== -1;
            }
        );
        this.setState({
            [name]: value,
            filteredList: filteredList
        })
    };

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
                        <Table colOrder={this.colOrder}>
                            {this.state.filteredList.map(item =>                             
                                <Employee
                                    key={item.login.uuid}
                                    image={item.picture.medium}
                                    name={`${item.name.first} ${item.name.last}`}
                                    phone={item.phone}
                                    email={item.email}
                                    dob={new Date(item.dob.date).toLocaleDateString("en-US", {
                                        year: "numeric", 
                                        month: "long", 
                                        day: "numeric"
                                    })}
                                />
                            )}
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DirectoryContainer;