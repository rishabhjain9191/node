(function (expressConfig) {

  var logger = require("../../utils/logger");

  var path = require('path');

  expressConfig.init = function (app, express) {

    //setup view engine
    logger.debug("Setting 'ejs' as view engine");
    app.set("view engine", "ejs");

    logger.debug("Setting 'Views' folder");
    var viewsFolder = path.dirname(module.parent.filename) + '/views';
    app.set('views', viewsFolder);

    logger.debug("Setting 'Public' folder with maxAge: 1 Day.");
    var publicFolder = path.dirname(module.parent.filename)  + "/public";
    console.log(publicFolder);
    var oneYear = 31557600000;
    app.use(function(req, res, next) {
      console.log(req.originalUrl);
      next();
    })
    app.use('/assets', express.static(publicFolder));

    logger.debug("Setting parse urlencoded request bodies into req.body.");
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    logger.debug("Overriding 'Express' logger");
    app.use(require('morgan')({ "stream": logger.stream }));
  };

})(module.exports);
