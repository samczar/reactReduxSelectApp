import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
	return (
		<div>
			Song Detail
			<h1>{song.title || song}</h1>
		</div>
	)
}
const mapStateToProps = state => {
	return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
