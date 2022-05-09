const { ref, h } = Vue;
// const dpcsifyConfig 

const cqcProfile = {
    template: `
    <div id="profile" class="shadow">
        <div>
            <img class="profile-avatar" src="https://p6-passport.byteacctimg.com/img/user-avatar/0c70ee62a259efc6fbd0038db37e5ab7~300x300.image" />
        </div>

        <div class="profile-content">
            <div class="profile-name">炒青菜</div>
            <div class="profile-position">
                <svg  data-v-b84d6262="" width="21" height="18" viewBox="0 0 21 18" class="icon position-icon"><g data-v-b84d6262="" fill="none" fill-rule="evenodd"><path data-v-b84d6262="" fill="#2D2516" d="M3 8.909V6.947a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V8.92l-6 2.184v-.42c0-.436-.336-.79-.75-.79h-1.5c-.414 0-.75.354-.75.79v.409L3 8.909zm0 .7l6 2.184v.47c0 .436.336.79.75.79h1.5c.414 0 .75-.354.75-.79v-.46l6-2.183V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.609zm6.75 1.075h1.5v1.58h-1.5v-1.58z"></path> <path data-v-b84d6262="" stroke="#2D2516" d="M7.5 5.213V4A1.5 1.5 0 0 1 9 2.5h3A1.5 1.5 0 0 1 13.5 4v1.213"></path></g></svg>
                <span>苦逼前端</span>
            </div>
            <div class="profile-yan">摆烂摆烂...</div></div>
            <div><slot></slot></div>
        </div>
    </div>
    `
}

const btnCounter = {
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
}

const vueComponents = {
    'btn-counter': btnCounter,
    'cqc-profile': cqcProfile
}

const $docsifyConfig = {
    formatUpdated: '{MM}/{DD} {HH}:{mm}',
    name: '<h2>小巷子</h2>',
    // nameLink: {
    //     '/': '/?id=get-something-better',
    // },
    themeColor: '#3F51B5',

    repo: '',
    el: '#app',

    auto2top: true, //切换页面后是否自动跳转到页面顶部。
    homepage: 'main.md',
    executeScript: true,

    loadSidebar: true, // 定制侧边栏
    mergeNavbar: true, // 小屏设备下合并导航栏到侧边栏
    maxLevel: 4,
    subMaxLevel: 2,
    // routerMode: 'history',

    loadNavbar: true,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },

    vueComponents,

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