var replace = require('broccoli-replace');

var options =  {
  files: [
   '**/*' // replace only html files in src
 ],
 patterns: [
   {
     match: /igor/,
     replacement: function() {
      return 'seb'
    } 
   }
 ]
};

module.exports = {
 name: 'relative-i18n',
 included: function(app) {
   this._super.included.apply(this, arguments);

     app.registry.add('template', {
       name: 'relative-i18n',
       ext: 'hbs',
       toTree: function(tree) {
         return replace(tree, options);
       }
     });
   }

};
