<template>
  <div>
    <button @click="addTask">ADD</button>
    <div class="items-list">
      <div class="item d-flex justify-content-between"
           v-for="(item,index) in list"
           :key="index"
      >
        <input type="text" v-model="item.text">
        <input type="checkbox" value="checked" v-model="item.checkbox">
        <input type="radio" value="value" v-model="item.radio">
        <select name="" id="" v-model="item.selected">
          <option v-for="option in 5" :key="option" :value="option">{{option}}</option>
        </select>
        <button @click="deleteTask(index)">DELETE</button>
      </div>
    </div>
    <pre>






    </pre>
  </div>
</template>

<script>
export default {
name: "SamvelsTask",
  data() {
    return {
      list:[],
    }
  },
  methods:{
      addTask() {
        this.list.push({
          text:'',
          checkbox:[],
          radio:'',
          selected:''
        })
      },
    deleteTask(index) {
      this.list.splice(index,1)
    }
  }
}
</script>

<style scoped>

  .item {
    border: 1px solid;
  }

  button  {
    background: grey;
  }
</style>