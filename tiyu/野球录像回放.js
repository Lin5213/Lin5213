var rule = {
    title:'野球直播',
    host:'https://www.yeqiuzhibo.com/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'NBA&CBA&篮球&足球&综合',       //静态分类名称拼接
    class_url:'lanqiuluxiang/nba&lanqiuluxiang/cba&lanqiuluxiang/lanqiu&zuqiuluxiang&zonghe',    //静态分类标识拼接
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.luxiang_list_fl li');tabs.forEach(function(it){var  pz=pdfh(it,'a&&Text');var ps=pdfh(it,'.lxlb_tiem&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.lxtitle.clearfix&&Text;.breadnav a:gt(0)&&Text',  //片名;类型 时间
          desc:';;;.breadnav span&&Text;.breadnav span&&Text',  //// 演员;导演
          content:".lxtitle.clearfix&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.game_signa_wrap a',  //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          list_url:'a&&href'
         },
     搜索:'',  
    }