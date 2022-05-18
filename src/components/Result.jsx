import React from 'react'
import { connect } from 'react-redux'


const Result = ({value}) => {
  return (
    <h2>{value}</h2>
  )
}

const mapStateToProps = ({value}) => {
    return {value};
}
export default connect(mapStateToProps)(Result);