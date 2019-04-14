import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {
    state = {
        bookTitle: "",
        results: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.bookTitle).then(res=> this.setState({result: res.data.response}));
    };

    render(){
        return(
            <div className="container">
                <div className="card mb-3" style="max-width: 540px;">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.result.items.volumeInfo.imageLink.thumbnail} className="card-img" alt="..." />
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.result.items.volumeInfo.title}</h5>
                                    <p className="card-text">{this.result.items.volumeInfo.authors}</p>
                                    <p className="card-text"><small className="text-muted">{this.result.items.volumeInfo.description}</small></p>
                                <button type="button" className="btn btn-primary" href={this.result.items.volumeInfo.previewLink} >View</button>
                                <button type="button" className="btn btn-danger" onClick={this.deleteBook(book._id)} >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }



}

export default Search;