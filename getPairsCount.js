function getPairsCount(tasks) {
  const POINTS = 60;
  const _tasks = [...tasks]

  let value = 0

  while(_tasks.length) {
    const current = _tasks.pop()
    const pairs = _tasks.filter((task, i) => ((current + task) % POINTS) === 0)

    value += pairs.length
  }

  return value
}
