import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import NewsRow from '../components/NewsRow/NewsRow'
import Loader from '../components/Loader/Loader'
import {connect} from 'react-redux'
import { fetchPostsWithRedux } from "../actions/index";
require('./ArticlesIndex.scss')

class ArticlesIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      articlePerPage: 5
    }
  }
  // Component Life Cycle
  componentDidMount() {
      //fetch all posts from API
      this.props.fetchPostsWithRedux();
  }

  // Functions
  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  };

  render () {

    const { postList, loader } = this.props;
    const {currentPage, articlePerPage } = this.state;

    // Logic for displaying articles based on Pagination
    const indexOfLastArticle = currentPage * articlePerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
    const currentArticles = postList.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );

    // Render news row function
    const renderNewsRow = currentArticles.map(item => {
      let staticURL = 'https://www.nytimes.com/';
      return (
        <NewsRow
          id={item._id}
          snippet={item.snippet}
          source={item.web_url}
          pubDate={new Date(item.pub_date).toLocaleDateString()}
          multimedia={staticURL + item.multimedia[0].url}
        />
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(postList.length / articlePerPage); i++) {
      pageNumbers.push(i)
    }

    // Render pagination

    const renderPageNumbers = pageNumbers.map(number => (
      <li key={number} id={number} onClick={this.handleClick}>
        {number}
      </li>
    ));

    // Main render function
    return (
      <div>
        {/* Loader */}

        {!loader ? <Loader /> : null}

        {/* Container */}
        <Container>

          {/*Heading*/}
          <div className="heading">
            <h1>ClONE NYTIMES SITE</h1>
          </div>

          {/*Main section to display list posts*/}
          <div className="news_wrapper">
            <Row className="news_row">{renderNewsRow}</Row>
            <ul id="page-numbers">{renderPageNumbers}</ul>
          </div>
        </Container>
      </div>
    )
  }
}

//Map to state from store to props
const mapStateToProps = (state) => {
    return {
        postList: state.posts,
        loader: state.loaded
    };
};

//Connect function to store
export default connect(mapStateToProps, {fetchPostsWithRedux})(ArticlesIndex);
