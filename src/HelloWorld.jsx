import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'

const HelloWorld = (props) => {
  return (
    <div>
      <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
      <Button bsStyle='info'>Press me!</Button>
    </div>
  )
}

export default HelloWorld
