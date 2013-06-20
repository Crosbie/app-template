/*-----------------------------

app/models/Store
Model for abstracting local storage functionality

-----------------------------*/


var Store = (function(module) {


    //interface----------------------------------

    module.save     = save;    // save a model to local storage
    module.load     = load;    // load a model from local storage
    module.remove   = remove;  // clear a model from local storage
    module.clearAll = clearAll; // wipe local storage


    //implementation-------------------------------

    function save(modelName, model, callback){
        model = model || {};

        $fh.data({
            act: "save",
            key: modelName,
            val: model
        }, function() {
            //save success
            return callback(true);
        }, function(msg, err) {
            // save failed
            return callback(false, msg);
        });
    }

    function load(modelName, callback){
        $fh.data({
            act: "load",
            key: modelName
        }, function(res) {
            //load success
            return callback(true, res);
        }, function(msg, err) {
            //load failed
            return callback(false, msg);
        });
    }

    function remove(modelName, callback){
        $fh.data({
            act: "remove",
            key: modelName
        }, function() {
            //data removed
            return callback(true);
        }, function(msg, err) {
            //remove failed
            return callback(false, msg);
        });

    }

    function clearAll(callback){
        log('**Clearing LocalStorage**');
        localStorage.clear();
        return callback(true);
    }

    return module;

    // Sample Store call 
/*
    Store.save("app_myProfile", {param1: true},
        function(success, data){
            if(success){
                log('Save Complete');
            } else {
                log('Save Failed', data);
            }
        }
    );
*/

})(Store || {});