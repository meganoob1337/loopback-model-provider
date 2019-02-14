'use strict';
const fs = require('fs');
module.exports = function(loopbackApplication, options) {
  const excludes = options.excludes || [];
  const path = options.path || '/model-provider';
  const modelPath = __dirname + '/../../../common/models/';
  loopbackApplication.use(options.path, function(req, res, next) {
    let files = fs.readdirSync(modelPath);
    files = files.filter((file) => {
      return file.includes('.json') && !excludes.includes(file.replace('.json', ''));
    });
    files = files.reduce((acc, file) => {
      const model = JSON.parse(fs.readFileSync(modelPath + file));
      acc[model.name] = {
        ...model,
        plural: model.plural || model.name + 's'
      }
      return acc;
    }, {});
    res.send(JSON.stringify(files));
  });
  loopbackApplication.set('loopback-model-provider', options);
};
