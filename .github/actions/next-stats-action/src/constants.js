const path = require('path')
const fs = require('fs')

const benchTitle = 'Page Load Tests'
const workDir = path.join(fs.mkdtempSync(), 'next-stats')
const mainRepoDir = path.join(workDir, 'main-repo')
const diffRepoDir = path.join(workDir, 'diff-repo')
const statsAppDir = path.join(workDir, 'stats-app')
const diffingDir = path.join(workDir, 'diff')
const yarnEnvValues = {
  YARN_CACHE_FOLDER: path.join(workDir, 'yarn-cache'),
}
const allowedConfigLocations = [
  './',
  '.stats-app',
  'test/.stats-app',
  '.github/.stats-app',
]

module.exports = {
  benchTitle,
  workDir,
  diffingDir,
  mainRepoDir,
  diffRepoDir,
  statsAppDir,
  yarnEnvValues,
  allowedConfigLocations,
}
