import {ref,reactive} from 'vue'
export default function addStudent(state){
    let state2=reactive({
      stus:{
        id:'',
        name:'',
        age:''
      }
    })

    function addClick(e){
      e.preventDefault()
      let stu = Object.assign({},state2.stus)
      state.stus.push(stu)
      state2.stus.id="";
      state2.stus.name="";
      state2.stus.age=""
    }
    return {state2,addClick}
}
function removeStudent(){
   let state=reactive({
      stus:[
        {id:1,name:"asda",age:18},
        {id:1,name:"李晓雅",age:28},
        {id:1,name:"景天",age:20},
      ]
    })
    function delClick(index){
      state.stus = state.stus.filter((item,ind)=>ind!=index)
    }
return {state,delClick}
}

export   {
    addStudent,
    removeStudent
}