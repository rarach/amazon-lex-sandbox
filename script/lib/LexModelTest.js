(function () {
    'use strict';
    let AWS = require('aws-sdk');

    exports.lexModelTest = function () {

        var cmon = function() {
            //using serviceUser1 here
            AWS.config.credentials = new AWS.Credentials("AKIAXSY6IPMWD4XACO4Y", "vz1Ouk1SBoxAr5ms5Nv9xmq00Q0Fs/UdGrPsq7J7", null);     //TODO: THIS IS BAD, RIGHT?
            AWS.config.region = 'us-east-1';    //Lex available only here
            var lexModelService = new AWS.LexModelBuildingService();


            lexModelService.getBots({}, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
            });




            var params = { botName: "GenericTestBot" };
            lexModelService.getBotAliases(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
            });
        }

        return {
            cmon: cmon
        };
    };
  })();