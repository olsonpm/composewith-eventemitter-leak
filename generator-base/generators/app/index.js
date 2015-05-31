var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    'constructor': function constructor() {
            generators.Base.apply(this, arguments);
        }
    , 'initialize': function initialize() {
        this.composeWith('testing1', {}, {
            local: require.resolve('generator-testing1')
        });
        this.composeWith('testing2', {}, {
            local: require.resolve('generator-testing2')
        });
        this.composeWith('testing3', {}, {
            local: require.resolve('generator-testing3')
        });
        this.composeWith('testing4', {}, {
            local: require.resolve('generator-testing4')
        });
        this.composeWith('testing5', {}, {
            local: require.resolve('generator-testing5')
        });
        this.composeWith('testing6', {}, {
            local: require.resolve('generator-testing6')
        });
        this.composeWith('testing7', {}, {
            local: require.resolve('generator-testing7')
        });
        this.composeWith('testing8', {}, {
            local: require.resolve('generator-testing8')
        });
        this.composeWith('testing9', {}, {
            local: require.resolve('generator-testing9')
        });
        this.composeWith('testing10', {}, {
            local: require.resolve('generator-testing10')
        });
    }
});
