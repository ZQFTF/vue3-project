<template>
  <div>{{count}}
    <button @click="myalert()">点击</button>
    <form>
      <input type="text" v-model="state2.stus.id"/>
      <input type="text" v-model="state2.stus.name"/>
      <input type="text" v-model="state2.stus.age" />
      <button @click="addClick">添加</button>
    </form>
    <ul v-for="(item,index) in state.stus" :key="index">
      <li @click="delClick(index)">{{item.name}}</li>
    </ul>
  </div>
 
</template>

<script>
import {ref,reactive} from 'vue'
import {addStudent,removeStudent} from './appEdit'
export default {
  name: 'App',
  //setup函数是组合api的入口函数
  //ref：ref函数只能监听简单类型的变化，不能监听复杂类的变化(对象/数组)
  //reactive:监听对象数组
  setup(){
    //定义了一个名称叫做count的变量，这个变量初始值是0
    //这个变量发生改变之后，Vue会自动更新UI
    let count =ref(0)

    //在组合API中，如果想定义方法，不用定义到methods中，直接定义即可
    function myalert(){
      // alert(66)
      console.log(count)
      count.value+=1
    }

    // let state=reactive({
    //   stus:[
    //     {id:1,name:"asda",age:18},
    //     {id:1,name:"李晓雅",age:28},
    //     {id:1,name:"景天",age:20},
    //   ]
    // })
    // function delClick(index){
    //   state.stus = state.stus.filter((item,ind)=>ind!=index)
    // }

   

    let {state,delClick} = removeStudent()
    let {state2,addClick} = addStudent(state)
//  let state2=reactive({
//       stus:{
//         id:'',
//         name:'',
//         age:''
//       }
//     })

//     function addClick(e){
//       e.preventDefault()
//       let stu = Object.assign({},state2.stus)
//       state.stus.push(stu)
//       state2.stus.id="";
//       state2.stus.name="";
//       state2.stus.age=""
//     }
    //注意点
      //在组合api定义的变量/方法，要想在外界中使用，必须通过rerurn{xxxx,xxx}暴露出去
    return {count,myalert,state,delClick,state2,addClick}
  }
}

//参数与事件抽离
// function addStudent(state){
//     let state2=reactive({
//       stus:{
//         id:'',
//         name:'',
//         age:''
//       }
//     })

//     function addClick(e){
//       e.preventDefault()
//       let stu = Object.assign({},state2.stus)
//       state.stus.push(stu)
//       state2.stus.id="";
//       state2.stus.name="";
//       state2.stus.age=""
//     }
//     return {state2,addClick}
// }
// function removeStudent(){
//    let state=reactive({
//       stus:[
//         {id:1,name:"asda",age:18},
//         {id:1,name:"李晓雅",age:28},
//         {id:1,name:"景天",age:20},
//       ]
//     })
//     function delClick(index){
//       state.stus = state.stus.filter((item,ind)=>ind!=index)
//     }
// return {state,delClick}
// }

</script>
