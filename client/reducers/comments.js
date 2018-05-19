// Reducer Composition
function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // Return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.i),
        // After the deleted one, to the extends
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state=[], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // Take a copy of the current state
      ...state,
      // Overwrite the post with the new posts
      // BAPIPRjQce9: ["Wow", "Cool post!"]
      [action.postId]: postComments(state[action.postId], action) //Get a sub-piece of the comments
    }
  }
  return state;
}

export default comments;
