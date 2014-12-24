module.exports = {

    del: function () {

    },


    /* Using readdirSync() to return the list of the selected dir.
    /* tried using readdir() but brought some problems.
     */
    show: function () {
        console.log('Hello')
        var path = '../../../..';
        console.log(fs.readdirSync(path));
    }
}