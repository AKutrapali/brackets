module.exports = function check(str, bracketsConfig) {
    var conf = []
    for (var i=0;i<bracketsConfig.length;i++) {
    conf[i] = bracketsConfig[i].join ('')}
   
    var d = str.length+1
    while (str.length<d ) 
        {d = str.length
        for (var i=0;i<conf.length;i++) {
            str = str.replace(`${conf[i]}`, ''); 
        }       
    }
    if ( str.length === 0 ) {return true} else {return false}
}
