$(function(){
	'use strict';
	$('.lazy').Lazy();

$(window).on('scroll',function(){
    $('.player').Lazy();
    $("video").lazy();
});



    
 $('.privacy').click(function(){
        window.open("./Privacy-Policy/");  
    })

$("#checkcode").keyup(function(){
    var checkcode = $(this).val();
    if (checkcode.length >= 4){
	$.get("{pboot:msgaction}?checkcode=" + checkcode,function(data,status){
	    var checkdata = JSON.parse(data);
		if(checkdata.data!=="1")
        {
            $("#checkcode").css({"border-color":"red","border-width":"0 0 1px","outline":"none"});
            $("#checkcode").removeClass('form-control');
            $("#checkcode").addClass('form-control-plaintext');
            $("#checkcode").focus();
            return false;
        }
        else if(checkdata.data=="1")
        {
            $("#checkcode").css({"border-color":"#28a745","border-width":"0 0 1px","outline":"none"});
            $("#checkcode").addClass('form-control');
        }
	});
    }
    else
    {
            $("#checkcode").css({"border-color":"red","border-width":"0 0 1px","outline":"none"});
            $("#checkcode").removeClass('form-control');
            $("#checkcode").addClass('form-control-plaintext');
            $("#checkcode").focus();
            return false;
    }
});

  $('.inquiry').click(function(){
  
           var post=$("#contact-form").serialize();//判断有空
           //console.log(post);
           if (/=(&|$)/.test(post)) {           
           $("#contact-form").addClass('was-validated');           
                $.each($(".inquiry"),function (i, val) {               
                 //console.log(i,val.type,val.value);    
                  if (val.value=="") {

                    //val.focus();
                    return false;
                  }
                })
           return false;
           }

  });


		$('#contact-form').submit(function(e) {
		    
                function CountDown() {
                    $(".submit").attr("disabled", true);
                    $(".submit").html("Sending...( " + count + " )");
                    if (count == 0) {
                         $(".submit").html("<span>Get A Free Quote!</span> ").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
		    
		  var result = true;
          //console.log('111');
          e.preventDefault();
          //e.stopPropagation();
        
       
          var emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,6})$/;
          var mailvalue = $("input[name='email']");
          if (!emailReg.test(jQuery.trim(mailvalue.val()))) {
            mailvalue.focus();
          return false;
          } 
           
            if(result){
		            var count = 30;
                var countdown = setInterval(CountDown, 1000);

              
                
	    setTimeout(function () {
	    
		        $.ajax({
		            url: "{pboot:msgaction}",
		            type: "POST",
		            data:  new FormData($('#contact-form')[0]),
		            contentType: false,
		            cache: false,
		            processData:false,
		            dataType : "json", //已经为json
		            success: function(data){		            
		            
                //console.log(data);//输出data 
                
                var code = data.code;
                //转为json对象可以直接点属性
                //console.log(code);
                if (code == "0")//数据校验失败
                    {
                        $("#contact-form .alert").css('display','block');
                        $(".verify")[0].src='/core/code.php?'+Math.round(Math.random()*10);
                    }
                if (code == "1")//数据提交成功
                    {
                    $("#contact-form").html('<div class="alert alert-success col-lg-12 col-md-12" role="alert" style="display: block;"> <h4 class="alert-heading">Well done!</h4><hr><p><i class="ti-check-box"></i>   Thank you. Your inquiry was sent successfully!</p></div>');
                    }
		            },
		            statusCode: {
                        504: function() {
                           $("#contact-form").html('<div class="alert alert-success col-lg-12 col-md-12" role="alert" style="display: block;"> <h4 class="alert-heading">Well done!</h4><hr><p><i class="ti-check-box"></i>   Thank you. Your inquiry was sent successfully!</p></div>');
                        return false;
                       }
                    },
                    error:function(){
                    
                      $("#contact-form .alert").css('display','block');
                      $(".verify")[0].src='/core/code.php?'+Math.round(Math.random()*10);
                  
                      return false;
                    },
                    //发送请求开始时
                    beforeSend: function() {
                    },
                    //请求结束后
                    complete: function() {
                    }
                    
		       });
            
	    }, 1000); // in milliseconds
	    
    			return false;
    		}else{
    			return false;
            }
            
		})  
    setTimeout(function(){
        
    $("#phone").intlTelInput({
      //是否允许下拉
       allowDropdown: true,
      // 验证是否只有国家代码
       autoHideDialCode: true,
      // 添加在所选国家例数输入占位符
       utoPlaceholder: "polite",
      // 修改自动占位符
      // customPlaceholder: null,
      // 附加菜单到特定元素
      // dropdownContainer: "body",
      // 不要显示这些国家
      // excludeCountries: ["us"],
      // 在初始化过程中格式化的输入的值
       formatOnDisplay: true,
       //更多的查找功能
       geoIpLookup: function(callback) {
         $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
           var countryCode = (resp && resp.country) ? resp.country : "";
        window.country = (resp && resp.country) ? resp.country : "";
        window.ip = (resp && resp.ip) ? resp.ip : "";
        window.city = (resp && resp.city) ? resp.city : "";
           
           callback(countryCode);
         });
       },
       //带国家码
       hiddenInput: "mobile",
      //初始国家
       initialCountry: "auto",
      // 不要插入国际拨号码
       nationalMode: false,
      // 显示只有这些国家
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      //数字类型用于占位符
       placeholderNumberType: "MOBILE",
       //默认提示国家
       preferredCountries: ['in', 'eg','sa','sy','pk'],
       //分开显示数字
       separateDialCode: true,
       //验证脚本
      //utilsScript: "{pboot:sitetplpath}/js/utils.js"
    });
    	
 
            dz_rev_slider_1();
        }, 1500); //延迟一秒加载

})
