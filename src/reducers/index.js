import { combineReducers } from 'redux'

const songReducer = () => {
	return [
		{
			title: 'Billy Jean',
			duration: '4:05'
		},
		{
			title: 'Want It that Way',
			duration: '2:05'
		},
		{
			title: 'Escape Gate',
			duration: '3:05'
		}
	]
}

const selectedSongReducer = (selectedSong = 'Loading...', action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}
	return selectedSong
}

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
})
