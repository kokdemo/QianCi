var textareaArray = document.getElementsByTagName('textarea');
var textareaArrayLength = textareaArray.length;
for(var i = 0;i<textareaArrayLength;i++){
    var temp = textareaArray[i].value;
    console.log(textareaArray[i]);
    if(temp.length >50){
//        var log = "";
//        for(var j=0;log != temp;j++){
//            temp = temp.replace(/【【([^"]*)】】/,"[$1]");
//            temp = temp.replace(/（（([^"]*)））/,"($1)");
//            temp = temp.replace(/““([^"]*)””/,"\"$1\"");
//            log = temp;
//            //记录temp的变动情况，如果一轮结束之后，正则没有变化，说明所有的成对符号已经被匹配。
//        }
        temp = temp.replace(/【【/g,"[");
        temp = temp.replace(/】】/g,"]");
        temp = temp.replace(/（（/g,"(");
        temp = temp.replace(/））/g,")");
        temp = temp.replace(/““/g,"\"");
        temp = temp.replace(/””/g,"\"");
        temp = temp.replace(/‘‘/g,"'");
        temp = temp.replace(/’’/g,"'");
        temp = temp.replace(/『『/g,"\"");
        temp = temp.replace(/』』/g,"\"");
        temp = temp.replace(/「「/g,"'");
        temp = temp.replace(/」」/g,"'");
        temp = temp.replace(/》》/g,">");
        temp = temp.replace(/《《/g,"<");
        temp = temp.replace(/。。/g,".");
        temp = temp.replace(/！！/g,"!");
        temp = temp.replace(/××/g,"*");

        //通过句号来转义

        temp = temp.replace(/。、/g,"/");
        temp = temp.replace(/、。/g,"\\");
        temp = temp.replace(/。……/g,"^");
        temp = temp.replace(/。——/g,"_");
        temp = temp.replace(/。：/g,":");

        textareaArray[i].value =  temp;
        console.log(temp);
    }
}



//var textareaVal = document.getElementsByTagName('textarea')[1].value;
//console.info(textareaVal);
//textareaVal.replace(/【【([^"]*)】】/g, "[$1]");