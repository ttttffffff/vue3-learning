declare module '*.vue' {
    import {ComponentOptions} from 'vue'
    const componentOptions: ComponentOptions;
    export default componentOptions; // 或者 export default componentOptions.extend
}