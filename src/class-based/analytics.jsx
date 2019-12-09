import React from 'react'

export default class PhotoContainer extends React.Component {
  constructor(props) {
    super(props)
    const initialUser = localStorage['app-user'] || 'Guest'
    this.state = {
      user: initialUser,
    }

    this.editUsername = this.editUsername.bind(this)
  }

  componentWillMount() {
    document.addEventListener('mousemove', () => null)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', () => null)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      localStorage.setItem('app-user', this.state.user)
    }
  }

  editUsername(e) {
    e.preventDefault()

    const { value } = e.target

    this.setState({
      user: value.trimStart(),
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome, {this.state.user}</h1>

        <input
          type="text"
          value={this.state.user}
          onChange={this.editUsername}
        />
      </div>
    )
  }
}
