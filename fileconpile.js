var less = require('less');
var fs = require('fs');
 
var lessContent = fs.readFileSync('style.less', {encoding : 'utf-8'});
 
less.render(lessContent, function(err, output){
    if(err) throw new Error(err);
 
    fs.writeFileSync('rez_style.css', output.css);
});