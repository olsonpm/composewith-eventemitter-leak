'use strict';

//---------//
// Imports //
//---------//

var generators = require('yeoman-generator');


//------//
// Main //
//------//

module.exports = generators.Base.extend({
    'constructor': function constructor() {
            generators.Base.apply(this, arguments);
        }
    , 'initialize': function initialize() {
        // does nothing
    }
});
