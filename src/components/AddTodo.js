import React, {PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'

export default class AddTodo extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  _handleSave (text) {
    console.log(this.props)
    this.props.addTodo(text)
  }

  render () {
    return (
      <TodoTextInput
        className='new-todo'
        onSave={::this._handleSave}
        placeholder='Add...'
      />
    )
  }
}
