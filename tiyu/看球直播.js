var rule = {
    title:'看球直播',
    host:'https://kanqiu01.com/schedule/lists',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',       //静态分类名称拼接
    class_url:'/',    //静态分类标识拼接
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.datalist');tabs.forEach(function(it){var pz=pdfh(it,'.team_home span&&Text');var ps=pdfh(it,'span.aliases&&Text');var pk=pdfh(it,'.tema_away span&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.timer&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
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