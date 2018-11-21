// export.default = (id) => never(error) | id

export default (id) => {
  if (typeof id !== 'string') throw new Error('ID must be a string')
  const idAsInt = parseInt(id, 10)
  if (!Number.isFinite(idAsInt) || idAsInt < 1 || !Number.isInteger(idAsInt)) throw new RangeError(`Invalid repository ID, got: ${id}`)
  return id
}
