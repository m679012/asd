// the function
function cssPropNameToJSStyle (key) {
  return key.replace(/[-]\w/i, (match) => {
    const [/* minus sign */, firstChar] = match
    return firstChar.toUpperCase()
  })
}

export default cssPropNameToJSStyle
