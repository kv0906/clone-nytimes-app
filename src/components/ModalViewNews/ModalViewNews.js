import React from 'react'
require('./ModalViewNews.scss')

function ModalViewNews (props) {
  const { pubDate, snippet, source, multimedia } = props;

  if (props.isOpen === true) {
    return (
      <div className="modal_wrapper">
        <div onClick={props.onCloseModalView} className="close_btn" />
        <div className="modal_wrapper__content">
          <h1 className="heading">{snippet}</h1>
          <p className="pubDate">Published in {pubDate}</p>
          <img src={multimedia} alt="" />
          <p className="source">Source: {source}</p>
        </div>
      </div>
    )
  }
  return null
}

export default ModalViewNews
