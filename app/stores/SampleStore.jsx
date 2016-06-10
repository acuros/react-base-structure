var Reflux = require('reflux');
var SampleAction = require('actions/SampleAction');

var SampleStore = Reflux.createStore({
    listenables: [SampleAction],
    getInitialState: function() {
        return [2,3,4];
    },
    onInit: function () {
        setTimeout(function() {
            SampleStore.trigger([1,2,3]);
        }, 3000);
    }
});


module.exports = SampleStore;
