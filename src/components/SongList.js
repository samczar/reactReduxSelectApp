import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions'

class SongList extends Component {
	renderList = this.props.songs.map((song, key) => {
		return (
			<li key={key}>
				<span className="songTitle">
					{song.title} {song.duration}
				</span>
				<span className="selectSong">
					<button onClick={() => this.props.selectSong(song)}>
						Select Song
					</button>
				</span>
			</li>
		)
	})

	render() {
		return (
			<div>
				<h1>SongList</h1>
				<ul>{this.renderList}</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { songs: state.songs }
}
export default connect(
	mapStateToProps,
	{ selectSong }
)(SongList)
