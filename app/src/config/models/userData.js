import {action} from 'easy-peasy';

const userDataModel = {
    userData: {
        accountType: '',
        name: '',
        bio: '',
        profession: '',
        numberRegistry: '',
        phone: '',
        city: '',
    },
    updateUserData: action((state, payload) => {
        return {
            ...state,
            userData: {
                ...state.userData,
                ...payload,
            },
        };
    }),
};

export default userDataModel;