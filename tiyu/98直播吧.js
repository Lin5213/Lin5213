var rule = {
    title:'98直播吧',
    host:'https://m.98zhibo.com/',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',       //静态分类名称拼接
    class_url:'/',    //静态分类标识拼接
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.live_list_content li');tabs.forEach(function(it){var pz=pdfh(it,'td:eq(0)&&Text');var ps=pdfh(it,'strong&&Text');var pk=pdfh(it,'td:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.s1_time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:"h2&&Text;.against td:gt(0):lt(1)&&Text",//类型 时间
		desc:";;;.against td:gt(3):lt(1)&&Text;.against td:gt(5):lt(6)&&Text",  //演员;导演
		content:"h2&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:'.signals a',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}