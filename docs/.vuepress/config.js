  module.exports = {
    title: 'VuePress个人博客系统',  // 网站标题
    description : 'vue-press-demo',//描述
    base : '/',//基础路径
    themeConfig : {
      nav : [//右侧顶部导航
          { text: '前端学习', link: '/front/front.md' },
          { text: '后端进阶', link: '/end/end.md' },
          { text: '错误集锦', link: '/error/error.md' },
          { text: '踩坑记录', link: '/holerecord/holerecord.md' }
      ],
      sidebar: {
          '/front' : [
               {
                  title: '前端内容',
                  collapsable: false, // 不可折叠
                  children: [
                    {title:'Vue基础',
                    children:[
                      {title:'Vue语法',path:'/front/vue/vueyf.md'},
                      {title:'Vue路由',path:'/front/vue/vuely.md'},
                      {title:'Vue状态管理',path:'/front/vue/vuezt.md'}
                    ]
                  }
                  ]
                },
          ]
      },
    }
  }