import { getSearch, getSearchHot } from '../../api/home'

const Search = {
    state: {
        Hot: [],
        list: [],
        history: []
    },
    mutations: {
        // 搜索
        getSearch(state, item) {
            state.list = item
        },
        // 搜索热词
        getSearchHot(state, item) {
            state.Hot = item
        },
        // 搜索历史
        getHistory(state, item) {

            var index = state.history.findIndex((ele) => {
                return ele === item
            })

            if (index != -1) {
                state.history.splice(index, 1)
            }
            state.history.unshift(item)
        },
        DelHistory(state, index) {
            state.history.splice(index, 1)
        },
        
    },
    actions: {
        // 搜索
        getSearch(context, keyword) {
            getSearch({
                goodsName: keyword
            }).then(res => {
                console.log(res.data);
                context.commit('getSearch', res.data)
            })
        },
        // 搜索热词
        getSearchHot(context) {
            getSearchHot().then(res => {
                // console.log(res.data);
                context.commit('getSearchHot', res.data)
            })
        },
        // 搜索历史
        getHistory(context, item) {
            context.commit('getHistory', item)
        },
        DelHistory(context, index) {
            context.commit('DelHistory', index)
        }
    }
}

export default Search