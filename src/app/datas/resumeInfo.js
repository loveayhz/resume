export default {
    basicInfo : {
        // 建议不超过20个词
        fullname: '廖晓娟',
        jobTitle: '前端开发工程师',
        profile1: '华南理工大学 网络工程专业 2018届毕业生',
        profile2: '2014-2016连续两年校三等奖学金·成绩排名13%',
        profile3: '英语水平：CET6(515)',
        phone: 15625057119,
        email: '736929286@qq.com',
        blog: 'http://www.cnblogs.com/kasmine/',
        github: 'github.com/me-momo'
    },
    experiences : [
        {
            // experienceType: 'db_examSystem',
            experienceType: '数据库在线考试系统',
            experienceDescription: `课程设计做的在线考试系统。项目中主要负责前端界面开发及Mysql数据库设计，与两名java程序员进行开发,使用git进行版本控制作为小组组长,进行需求分析,网站整体架构和布局的设计，进行前端界面编写，利用ajax和后台进行数据交互。利用bootstrap进行整体前端框架以及使用改造的easy.ui数据网格插件`
        }, {

            // experienceType: 'music_player',
            experienceType: '音乐播放器',
            experienceDescription: `一款使用vue搭建仿造网易云音乐的音乐播放器,项目为独立开发项目，结合vuex,vueresource,vuerouter进行开发.使用webpack进行项目打包仿造网易云完成项目的全部样式，可适应safari移动端;可进行歌单搜索，歌手搜索，在线音乐播放等功能利用nodejs搭建服务器后台,为项目提供后台数据API。整个过程的开发加深了自己对于MVVVM框架的理解。`
        }, {

            // experienceType: 'resume_generator',
            experienceType: '在线简历生成器',
            experienceDescription: `从一个类似JSON数据的js文件读取数据,然后生成静态网页的简历生成器,使用了webpack和react技术`,
            experienceRefLink: "https://me-momo.github.io/resume/dist/"
        }, {

            // experienceType: 'fightSingleClub',
            experienceType: '喜茶拼单小助手',
            experienceDescription: "喜茶拼单小助手，一款适合大学生拼单的小助手，当收集完订单之后，通过剪切板剪切即可复制 到 校园小天使进行代购；同时还可以帮选择困难症人士选择一款饮品;基于原生js和clipboard脚本",
            experienceRefLink: "https://me-momo.github.io/fightSingleClub/index.html"
        }
    ],
    skills : [
        {
            // type: 'js',
            skillType: 'ECMAScript ( Javascript ) ',
            skillLevel: '90',
            skillDescription1: '熟悉原生Javascript，能脱离jQuery等类库编码；了解ECMAScript新标准,并能在项目中使用；了解javascript函数式编程',
            skillDescription2: '能运用模块化、面向对象的方式编程；'
        }, {
            // type: 'html_css',
            skillType: 'HTML 和 CSS',
            skillLevel: '80',
            skillDescription1: '能使用合理的结构和样式编写兼容主流浏览器的页面；',
            skillDescription2: '熟悉已标准化的HTML5/CSS3新特性'
        }, {
            // type: 'front_end_practise',
            skillType: '前端工程实践',
            skillLevel: '',
            skillDescription1: '了解VUE前端MVVM框架',
            skillDescription2: '熟悉jQuery/jQuery UI/Bootstrap的使用和扩展',
            skillDescription3: '在项目中使用过webpack,grunt,gulp等前端构建工具'
        }, {
            type: 'nodejs',
            skillType: 'Node.js',
            skillLevel: '50%',
            skillDescription1: '能够进行简单node服务器的开发,使用node开发过音乐播放器api',
            skillDescription2: '熟悉基于Express的Web开发。',
            skillDescription3: '了解异步I/O及事件驱动的服务器模型'
        }, {
            // type: 'other',
            skillType: '其他',
            skillLevel: '',
            skillDescription1: '掌握基本的数据结构和算法',
            skillDescription2: '了解基本的java语言,jsp开发',
            skillDescription3: '了解基本的python知识，能够使用python进行爬虫开发'
        }
    ],
    appraisals : ['我是一个充满活力、积极向上的人。对前端领域由衷热爱。自学能力强，愿拼搏的人。具有良好的团队合作意识，工作态度认真，乐于专研新技术。期待能够加入一个具有geek氛' +
            '围团队，和更多优秀的人一起学习']
}