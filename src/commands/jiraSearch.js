module.exports = {
    name: 'jiraSearch',
    alias: ['js'],
    run: async function (toolbox) {
        const spinner = toolbox.print.spin('Searching...')
        const parameters = toolbox.parameters.options;

        toolbox.jiraSearch(parameters.issue, spinner)
        
    }
}
