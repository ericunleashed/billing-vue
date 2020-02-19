const state = {
    plan: null,
    modules: [],
    currency: '$'
};

const getters = {
    cart: state => state,
    subtotal: state => {
        let subtotal = 0;
        if (state.plan !== null) {
            subtotal += state.plan.price;
        }

        if (state.modules.length > 0) {
            state.modules.map(m => {
                subtotal += m.price;
            });
        }

        return Round(subtotal);
    },
    tax: (state, getters) => {
        return Round(getters.subtotal * 0.15);
    },
    total: (state, getters) => {
        return Round(getters.subtotal + getters.tax);
    },
    isInCart: state => (m) => state.modules.find(module => module.name === m) !== undefined,
    currency: state => state.currency
};

const actions = {
};

const mutations = {
    setPlan: (state, plan) => (state.plan = plan),
    addModule: (state, module) => {
        if (state.modules.indexOf(module) === -1) {
            state.modules.push(module);
        }
    },
    removeModule: (state, name) => {
        state.modules = state.modules.filter(m => m.name !== name);
    }
};

const Round = function(amount) {
    return Math.round(amount * Math.pow(10, 2)) / Math.pow(10, 2);
}

export default {
    state,
    getters,
    actions,
    mutations
}