var rule = {
    title:'310直播',
    host:'http://www.310.tv',
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'热门&足球&篮球',
    class_url:'0&1&2',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    //一级:'.list_content a;.jiabifeng&&p:lt(5)&&Text;.feleimg img&&src;a&&t-nzf-o;a&&href',
     一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list_content a');tabs.forEach(function(it){var pz=pdfh(it,'.zhudui_wuyd&&Text');var ps=pdfh(it,'.diss&&Text');var pk=pdfh(it,'.team.kedui&&Text');var img=pd(it,'img&&op-zfr-a-g');var timer=pdfh(it,'p.eventtime&&Text');var url=pd(it,'a.clearfix.zhiding a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    
    二级:'*', 
    搜索:'',
}