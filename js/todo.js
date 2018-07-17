$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
        $("#button").click(function(){
            if($(".input-text").val()){
                let $var = `<li id=${generateUUID()} class="">
                <input name="done-todo" type="checkbox" class="done-todo"> ${$(".input-text").val()} </li>`;
                $("ol").append($var);
            }else{
                alert("请填写需要增加的内容！");
            }
        })

        $(document).on("change",".done-todo",function(){
            if($(this).is(":checked")){
                $(this).parent().addClass("checked");
            }else{
                $(this).parent().removeClass("checked");
            }
        })



        $(document).on("click", "ol li", function(){
            $(this).attr("contenteditable", true);
        })

        $(document).on("click","#filters a",function(){
            if($(this).attr("data-filter") == "active"){
                $("ol").children().filter('.checked').css('display','none');
                $('ol').children().not(".checked").css('display','');
            }else if($(this).attr("data-filter") == "all"){
                $("ol").children().css('display','');
            }else if($(this).attr("data-filter") == "complete"){
                $('ol').children().not(".checked").css('display','none');
                $("ol").children().filter('.checked').css('display','');
            }
        })
    });