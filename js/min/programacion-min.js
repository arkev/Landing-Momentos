function closeModal(){$(".mask").removeClass("active")}$(".show").on("click",function(){$(".mask").addClass("active")}),$(".close, .mask").on("click",function(){closeModal()}),$(document).keyup(function(o){27==o.keyCode&&closeModal()});