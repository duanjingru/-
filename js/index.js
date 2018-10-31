baseUrl='http://120.78.164.247:8099'
$(function(){
    $('.contentLeft li').on({
        click:function(){
            if($(this).text()=='首页'){
                $('.contentRight').load('pages/home.html');
            }else if($(this).text()=='栏目管理'){
                $('.contentRight').load('pages/category.html')
            }else if($(this).text()=='咨询管理'){
                $('.contentRight').load('pages/info.html')
            }else if($(this).text()=='用户'){
                $('.contentRight').load('pages/user.html')
            }
        }
    }); 
})
