var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    'constructor': function constructor() {
            generators.Base.apply(this, arguments);

            this.option('includeTenthGenerator', {
                required: false
                , desc: "Without setting moreMaxListeners, this will cause the EventEmitter warning."
            });
            this.option('moreMaxListeners', {
                required: false
                , desc: "Increases the EventEmitter.defaultMaxListeners to 20 from 10, removing the EventEmitter warning if includeTenthGenerator is set."
            });
        }
    , 'initialize': function initialize() {
        if (this.options.moreMaxListeners) {
            require('events').EventEmitter.defaultMaxListeners = 20;
        }

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
        if (this.options.includeTenthGenerator) {
            this.composeWith('testing10', {}, {
                local: require.resolve('generator-testing10')
            });
        }
    }
});
