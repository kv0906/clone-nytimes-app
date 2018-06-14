import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import ModalViewNews from '../ModalViewNews/ModalViewNews';
require('./NewsRow.scss');

class NewsRow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  // Function to open Modal View
  showModalView = () => {
    this.setState({
      isOpen: true
    })
  };
  // Function to close Modal View
  closeModalView = () => {
    this.setState({
      isOpen: false
    })
  };

  render () {
    const { pubDate, snippet, source, multimedia } = this.props;
    const { isOpen } = this.state;

    return (
      <Col md={12} className="news_block">
        <ModalViewNews
          onCloseModalView={this.closeModalView}
          isOpen={isOpen}
          snippet={snippet}
          pubDate={pubDate}
          multimedia={multimedia}
          source={source}
        />
        <Row>
          <Col className="pubDate" md={2}>
            {pubDate}
          </Col>
          <Col className="content" md={6}>
            <h1 onClick={this.showModalView} className="heading">
              {snippet}
            </h1>
            <a rel="noopener noreferrer" target="_blank" href={source} className="source">
              {source}
            </a>
          </Col>

          <Col className="multimedia" md={4}>
            <img src={multimedia} alt="" />
          </Col>
        </Row>
      </Col>
    )
  }
}
export default NewsRow
