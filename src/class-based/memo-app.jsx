import React from 'react'
import * as api from '../helpers/api'
import Photo from './photo'

export default class PhotosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      photos: [],
      isLoading: true,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const photos = await api.getPhotos()

    this.setState({
      photos,
      isLoading: false,
    })
  }

  handleChange(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      text: value,
    })
  }

  filterPhotos() {
    const { photos, text } = this.state

    if (!photos) {
      return []
    }

    return photos.filter(photo => photo.caption.contains(text))
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />

        {this.state.isLoading
          ? 'Photos are loading'
          : this.filterPhotos().map(photo => <Photo {...photo} />)}
      </div>
    )
  }
}
