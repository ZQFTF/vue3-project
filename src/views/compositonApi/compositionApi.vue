<template>
    <div>

    </div>
</template>
<script>
/*
    setup执行时机
        beforeCreate:表示组件刚刚呗创建出来，组件的data和methods还没有初始化好
    setup
    created:表示组件刚刚被创建出来，并且组件的data和methods已经初始化好

    2.setup注意点
    --由于在执行setup函数的时候，并没有执行created生命周期方法，所以在setup函数中，无法使用data和methods
    --由于我们不能在setup函数中使用data和methods，所以vue为了避免我们错误的使用，它直接将setup函数中this修改成了undefined
    --setuo函数只能是同步的不能是异步的
*/


export default defineComponent({
    setup() {
        
    },
})
</script>
