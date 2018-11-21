const worker = async (state) => {
  const savedState = state.toJS()
  const stringifiedState = JSON.stringify(
    typeof savedState === 'object' && savedState !== null
      ? savedState
      : {},
  )

  localStorage.setItem('redux-backup', stringifiedState)
}

const saveStateMiddleware = store => next => (action) => {
  const ret = next(action)
  worker(store.getState())
  return ret
}

saveStateMiddleware.withExtraArgument = saveStateMiddleware

export default saveStateMiddleware
