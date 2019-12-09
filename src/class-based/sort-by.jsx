import React from 'react'

export default class PhotoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'filename',
    }

    this.toggleSort = this.toggleSort.bind(this)
  }

  toggleSort(e) {
    e.preventDefault()
    const newSortBy = this.state.sortBy === 'name' ? 'date' : 'name'
    this.setState({
      sortBy: newSortBy,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleSort}>
          Sorting By {this.state.sortBy}
        </button>
      </div>
    )
  }
}
