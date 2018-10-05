module.exports = {
    name: 'jqlExport',
    alias: ['je'],
    run: async function(toolbox) {
        
        const jql = toolbox.parameters.options.jql;
        toolbox.print.info(jql);
        const spinner = toolbox.print.spin('Searching...')
        toolbox.jqlExport(jql, spinner)
    }
}
