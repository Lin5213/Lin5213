var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.live',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/', 
   //url:'/match/fyclass/live',
    //class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',
   // class_name:'全部&NBA&CBA&纬来体育&英超&西甲&意甲&德甲&法甲&中超&斯诺克',       //静态分类名称拼接
   //class_url:'/&match/1/live&match/2/live&match/21/live&match/8/live&match/9/live&match/10/live&match/14/live&match/15/live&match/7/live&match/30/live',    //静态分类标识拼接
   
    推荐:'*',
    //一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.group-game-item');tabs.forEach(function(it){var pz=pdfh(it,'.team-name&&Text');var ps=pdfh(it,'.&&Text');var pk=pdfh(it,'.d-none div:gt(1):lt(3)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.btn&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".team-name&&Text;.game-name&&Text",
        img:".img-responsive.center-block.team-logo&&src",
        desc:";;;.game-info-container div:eq(0)&&Text;.game-info-container div:eq(2)&&Text",
	    content:".game-info-container&&Text",
        tabs:"js:TABS=['【直播源】']",
	    lists:"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)})"
         // lists:'div#livePlaySource.list-group a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
         // list_url:'a&&href'
        },
    搜索:'',
}