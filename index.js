var replace = require('broccoli-replace');

var options =  {
  files: [
   '**/*.hbs' // replace only html files in src
 ],
 patterns: [
   {
     match: 'igor',
     replacement: 'seb'
   }
 ]
};

module.exports = {
 name: 'relative-i18n',
 included: function(app) {
   this._super.included.apply(this, arguments);

     app.registry.add('templates', {
       name: 'relative-i18n',
       ext: 'templates',
       toTree: function(tree) {
         return replace(tree, options);
       }
     });
   }

};
