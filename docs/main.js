const { ref, h } = Vue;
// const dpcsifyConfig 
const $docsifyConfig = {
    formatUpdated: '{MM}/{DD} {HH}:{mm}',
    name: '<h2>docsify</h2>',
    nameLink: {
        // '/': '/?id=get-something-better',
        '/': '/',
    },
    themeColor: '#3F51B5',

    repo: '',
    el: '#app',

    auto2top: true, //切换页面后是否自动跳转到页面顶部。
    homepage: 'main.md',
    executeScript: true,

    loadSidebar: true, // 定制侧边栏
    mergeNavbar: true, // 小屏设备下合并导航栏到侧边栏
    maxLevel: 4,
    subMaxLevel: 3,
    // routerMode: 'history',

    loadNavbar: true,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },

    vueComponents: {
        'button-counter': {
            template: `
                        <button @click="count += 1">
                        You clicked me {{ count }} times
                        </button>
                    `,

            setup() {
                return {
                    count: ref(0)
                }
            }
        },
    },

    coverpage: true,
    onlyCover: false,
    coverpage: 'cover.md',
    coverpage: {
        '/': 'cover.md',
    },

    topMargin: 90,

    search: {
        paths: 'auto',
        placeholder: {
            '/': '搜索'
        },
        pathNamespaces: ['/vue/vue3'],

        noData: {
            '/': '找不到结果'
        },

        hideOtherSidebarContent: true,
    }
}


if (location.href.includes('cqc-hub')) {
    console.log('change basePath');
    $docsifyConfig.basePath = 'https://cqc-hub.github.io/blob.io/'
}


window.$docsify = $docsifyConfig