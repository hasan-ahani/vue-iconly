import IconlyComponent from "./components/Iconly";

const Iconly = {
    install(Vue) {
        Vue.component("iconly", IconlyComponent);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Iconly);
}

export default Iconly;
