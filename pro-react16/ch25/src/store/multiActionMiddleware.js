export function multiActions({ dispatch, getState }) {
  return function receiveNext(next) {
    return function processAction(action) {
      if (Array.isArray(action)) {
        action.forEach(a => next(a));
      } else {
        next(action);
      }
    }
  }
}