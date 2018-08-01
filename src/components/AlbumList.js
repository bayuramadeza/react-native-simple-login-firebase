import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails'

class AlbumList extends Component {
  state = {albums:[]};

  componentWillMount(){
    //console.log('component will mount in ALbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //.then(response => console.log(response));
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbum(){
    return this.state.albums.map(album =>
      // <Text key={album.title}>{album.title}</Text>
      <AlbumDetail key={album.title} record={album} />
    );
  }

  render(){
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbum()}
      </ScrollView>
    );
  }
};

export default AlbumList;
