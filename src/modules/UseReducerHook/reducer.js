export function init(initialCount) {
  return { count: initialCount };
}

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: parseInt(state.count, 10) + 1 };
    case "decrement":
      return { count: parseInt(state.count, 10) - 1 };
    case "reset":
    default:
      return init(action.payload);
  }
}
