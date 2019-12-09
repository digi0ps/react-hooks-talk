import React from 'react'
import * as api from '../helpers/api'
import Photo from './photo'

export default class PhotosContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      isLoading: true,
    }
  }

  async componentDidMount() {
    const photos = await api.getPhotos()

    this.setState({
      photos,
      isLoading: false,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome, {this.state.user}</h1>
        {this.state.isLoading
          ? 'Photos are loading'
          : this.state.photos.map(photo => <Photo {...photo} />)}
      </div>
    )
  }
}
