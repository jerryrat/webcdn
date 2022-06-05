$(function(){
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
      utilsScript: "/template/ooitech/js/utils.js"
    });
});	/*ready*/