$(function(){$(".title").each(function(index,item){$(item).mouseenter(function(){var contentList=$(".content");$(".title").removeClass("hover_tab"),contentList.hide(),$(contentList[index]).show(),$(item).addClass("hover_tab")})})});