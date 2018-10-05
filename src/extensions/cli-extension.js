// add your CLI-specific functionality here, which will then be accessible
// to your commands
const config = require('../../configs/config.json')
var jiraConnector = require('jira-connector');

module.exports = (toolbox) => {
  const { print } = toolbox
  var jiraClient = new jiraConnector({
    host: config.host,
    basic_auth: {
      username: config.username,
      password: config.apiToken
    }
  })

  toolbox.jiraSearch = (issue, spinner) => {
    jiraClient.issue.getIssue({
      issueKey: issue
    }, function(error, issue){
      spinner.succeed('Done');
      print.info(issue.fields.summary)
    })
  }

  toolbox.jqlExport = (jql, spinner) => {
    jiraClient.search.search({
      jql: jql
    }, function(error, results) {
      spinner.succeed('Bunch of stuff')
      print.info(results)
    })
  }
}
