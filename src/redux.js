export const SongReducer = (state, action) => {
    const types = {
        'PLAY_SONG': { ...state, isPlaying: true },
        'PAUSE_SONG': { ...state, isPlaying: false },
        'CHANGE_SONG': { ...state, song: action?.payload?.music },
    }

    return types[action?.type] || state
}

export const QueueReducer = (state, action) => {
    const types = {
        'ADD_QUEUE': [...state, action?.payload?.music],
        'REMOVE_QUEUE': state.filter(queue => queue.id !== action?.payload?.music?.id)
    }

    return types[action?.type] || state
}

