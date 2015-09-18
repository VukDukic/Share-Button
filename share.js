/*
 * @author Salvatore Mariniello
 * Built on top of the jQuery library
 * http://jquery.com
 * from https://github.com/mssalvo/Share-button-websites
 */

;(function($,w){

  $.fn.share=function(option){

	var urls={
		facebook:'http://www.facebook.com/share.php?u=|u|',
		twitter:'https://twitter.com/share?url=|u|&text=|140|',
		google:'https://plusone.google.com/_/+1/confirm?hl=en&url=|u|',
		linkedin:'http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com',
		tumblr:'http://www.tumblr.com/share?v=3&u=|u|',
		digg:'http://digg.com/submit?url=|u|&title=|t|',
		reddit:'http://reddit.com/submit?url=|u|',
		pinterest:'http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|',
		posterous:'http://posterous.com/share?linkto=|u|&title=|t|',
		stumbleupon:'http://www.stumbleupon.com/submit?url=|u|&title=|t|',
		email:'mailto:?subject=|t|'},
		defaults={
		shared:['facebook','twitter','google','linkedin','digg'],
		//shared:['facebook','twitter','google','linkedin','tumblr','digg','reddit','pinterest','posterous','stumbleupon','email'],
		title:null,url:null,desc:null},
		options= $.extend({}, defaults, option),
		title = options.title || document.title,
		url = options.url|| location.href,
		desc = "",width=options.width || "640",height=options.height || "530";

    return this.each(function(){

   for(var j in options.shared){
     shared_name=options.shared[j];
     href_ = urls[shared_name];
     href_ = href_.replace('|u|',url).replace('|t|',title).replace('|d|',desc).replace('|140|',title.substring(0,130));
     var a=$("<a/>").appendTo(this).attr("href",href_).addClass("shared").addClass(shared_name).attr("title",shared_name).text("").bind("click",function(){
     var x = Number(screen.width/2) - ((Number(width)/2)),y = Number(screen.height/2) - ((Number(height)/2));
		window.open($(this).attr('href'),'t','toolbar=0,resizable=1,status=0,width='+width+',height='+height+',left='+x+',top='+y+'');
         return false;
     })
   }


    })



  }
})(jQuery,window)
