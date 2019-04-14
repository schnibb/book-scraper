import React, {Component} from "react";
import API from "../../utils/API";

class Books extends Component{
    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    };

    componentDidMount(){
        this.displayBooks();
    }

    displayBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({books: res.data, title: "", author: "", description: "", image: "", link: ""}))
                .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render(){
        return(
            <div className="container">
            {this.state.books.length ? (
                {this.state.books.map(book => {
                    return(
                        <div className="card mb-3" style="max-width: 540px;">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={book.image} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">By: {book.author}</p>
                                        <p className="card-text"><small className="text-muted">{book.description}</small></p>
                                        <button type="button" className="btn btn-primary" href={book.link} >View</button>
                                        <button type="button" className="btn btn-danger" onClick={this.deleteBook(book._id)} >Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            ):(
                <h3>No results to display</h3>
            )}
            </div>
        );
    }
}

export default Books;