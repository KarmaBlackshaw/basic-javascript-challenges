
const { performance } = require('perf_hooks')

module.exports = fn => {
  const totalPerf = 10000
  let totalExec = 0

  for (let index = 0; index < totalPerf; index++) {
    const start = performance.now()
    fn()
    const end = performance.now()

    totalExec += (end - start)
  }

  console.log(`Function took ${totalExec / totalPerf}ms`)
}
