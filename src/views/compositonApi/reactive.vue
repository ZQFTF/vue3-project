<template>
    <div>
        <p>{{state.time}}</p>
        <button @click="myFn">点击</button>
    </div>
</template>
<script>
/*
1.什么事reactive？
    --reactive是vue3中提供的实现响应式数据的方法
    --在vue2中响应式数据是通过defineProperty来实现的，而在vue3中响应式数据是通过es6的Proxy来实现的

2.reactive注意点
    --reactive参数必须是对象（json/arr）
    --如果给reactive传递了其他对象
        +默认情况下修改对象，界面不会自动更新
        +如果想更新，可以通过重新赋值的方式

*/
import {reactive} from 'vue'
export default {
    setup() {
        //创建一个响应式的数据
        //本质：就是将传入的数据包装成一个proxy对象
        // let state = reactive({
        //     age:16
        // });
        // let state = reactive([1,3,5])
        //直接修改以前的，界面不会更新
        let state = reactive({
            time:new Date()
        })
        function myFn(){
            // count = 6666 //由于在创建响应式数据的时候传递的不是一个对象，所以无法实现响应式
            // state.age=22
            // state[0] = 666
            // state.time.setDate(state.time.getDate()+1)
            //重新赋值
            const newTime = new Date(state.time.getTime())
            newTime.setDate(state.time.getDate()+1)
            state.time=newTime
            console.log(state.time);
        }
        return {state,myFn}
    },
}
</script>
