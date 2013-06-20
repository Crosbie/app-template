// helper function used by the FSM below
var sendAction = function(act, options, successFn, failFn) {
    Act.call(act, options,
        function(res){
            App.log(act,"called, with params",options);
        }, function(msg, err){
            App.log(act,"failed, with params",options);
        }
    );
};

var ActManagementFsm = machina.Fsm.extend({

    initialize: function() {
        var self = this;
        // we cause this FSM to transition based on the
        // state reported by the httpConnectivityFsm
        self.httpConnectivityFsm.on("transition", function( data ) {
            if( data.toState === "online" ) {
                self.handle( "transportAvailable" );
            } else if ( data.toState === "offline" || 
                        data.toState === "probing" ||
                        data.toState === "disconnected" ) {
                self.handle( "transportUnavailable" );
            }
        });
        self.initialState = (self.httpConnectivityFsm.state === "online") ? 
            "sending" : 
            "queueing";
    },
    
    initialState: "queueing",
    
    states: {
        queueing: {
            sendHttpRequest: function() {
                this.deferUntilTransition('sending');
            },
            transportAvailable: "sending"
        },
        sending: {
            sendHttpRequest: function( act, options, successFn,  failFn ) {
                sendAction.call(this, act, options, successFn,  failFn);
            },
            transportUnavailable: "queueing"
        }
    },
    
    mayAct : function( act, options, successFn,  failFn ) {
        this.handle( "sendHttpRequest", act, options, successFn,  failFn);
    }
});
