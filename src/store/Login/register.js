import '../../api/index'
import { getUserPhone } from '../../api/user'

const register = {
    state: {

    },
    mutations: {
        getphone(state, item) {

        }
    },
    actions: {
        getphone(context, phone) {
            getUserPhone({
                phone: phone,
                codeType: 0
            }).then(res => {
                console.log(res.msg);
                context.commit('getphone')
            })
        },
        getRegister(context) {
            getCode().then(res => {
                console.log(res);
                context.commit('getResiter')
            })
        },
    }
}

export default register