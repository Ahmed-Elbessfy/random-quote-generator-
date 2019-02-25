import React from 'react'
import PropTypes from 'prop-types'

function Quote(props) {
  return (
    <div className='quote'>
      <blockquote id='text'><i className="fas fa-quote-left"></i>{props.quote}</blockquote>
      <cite id='author'>- {props.author}</cite>
    </div>
  )
}

Quote.propTypes = {
  quote : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
}

export default Quote

