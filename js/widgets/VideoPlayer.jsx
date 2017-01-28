import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createWidget, addToQueue} from '../actions/index'
import {generateElementId} from '../helpers/Widget'

class VideoPlayer extends Component {

  constructor (props) {
    super(props)

    this.elementId = generateElementId()
  }

  componentDidMount () {
    this.props.createWidget(this.props, this.elementId, {draggable: true})
  }

  render () {
    return (
      <div className='widget video' id={this.elementId}>
        <video src={this.props.src} {...this.props.config} />
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  draggable: React.PropTypes.any,
  src: React.PropTypes.string.isRequired,
  config: React.PropTypes.object,
  createWidget: React.PropTypes.func,
  addToQueue: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    widgetQueue: state.widgets.widgetQueue,
    widgetList: state.widgets.widgetList
  }
}

export default connect(mapStateToProps, {createWidget, addToQueue})(VideoPlayer)
