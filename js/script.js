$(document).ready(function(){
    $(document).mousemove(function(p){
        let cursorX = p.pageX;
        let cursorY = p.pageY;
        let tranX = ((7 * cursorX) / 570) + 40;
        let tranY = ((7 * cursorY) / 570) + 50;
        $('.text').css({
            "background-position": tranX + "%" + tranY + "%"
        });
    });
});