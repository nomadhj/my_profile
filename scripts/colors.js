var Body = {
    setColor:function(color){
        document.querySelector('div.profile_sections').style.color = color;
    },
    setBackGroundColor:function(color){
        document.querySelector('div.profile_sections').style.backgroundColor = color;
    },
}
var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
                alist[i].style.color = color;
                i += 1;
            }
    },
}
var Nav = {
    setBackGroundColor:function(color){
        document.querySelector('div.navigation').style.backgroundColor = color;
    },
    setColor:function(color){
        document.querySelector('span.highlight').style.color = color;
    },
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '야간모드'){
            Body.setBackGroundColor('black');
            Body.setColor('#f3f3f3');
            self.value = '주간모드';

            Links.setColor('powderblue');
            Nav.setBackGroundColor('rgb(6, 35, 130)');
            Nav.setColor('powderblue');
        }
    else{
            Body.setBackGroundColor('#f3f3f3');
            Body.setColor('#384b5e');
            self.value = '야간모드';

            Links.setColor('#ffeacd');
            Nav.setBackGroundColor('#ffb24b');
            Nav.setColor('#ffb24b');
    }
}