<template>
  <div id="app">
    <div class="header" style="width: 95%;display: flex;justify-content: space-between; margin-top: 2rem;margin-bottom: 1rem;">
      <h3>Edit Form</h3>
      <button style="" class="btn btn-secondary">Back</button>
    </div>
    <div class="content">
    
    <div style="display: flex; width: 100%; justify-content: space-between;">
      <formLanguagesVue style="margin-left: 5%; margin-top: 1.5rem;"></formLanguagesVue>
      <div style="display: flex;align-items: center;margin-right: 5%; margin-top: 1.5rem;"><input type="number" value="0" id="tofrom" min="0" step="1" style="width: 3rem; height: 2rem;"/>
        <h2>></h2>
    <input type="number" value="0" id="fromto" min="0" step="1" data-bind="value:replyNumber" style="width: 3rem; height: 2rem;"/>
    <button type="button" style="margin-left: 0.5rem;" class="btn btn-primary" @click="swap(0,1)">Swap</button>
  </div>
    
    </div>
    <h5 style="margin-left: 5%;margin-top: 1rem;">Title {{SelectedLang}}</h5>
    
    <input id="title-input" class="form-control" style="width: 90%;align-self: center;" type="text">
    
    <formAdd v-if="Addform"></formAdd>
    <formObjectVue style="align-self: center;"></formObjectVue>
    <button style="margin-top: 1rem;align-self: center;" @click="formCleaner()" class="btn btn-outline-primary">+Add Question</button>
  </div>
  <div class="footer"><button type="button" class="btn btn-primary">Save</button></div>
</div>
</template>

<script>
import formObjectVue from './components/formObject.vue';
import formLanguagesVue from './components/formLanguages.vue';
import formAdd from  './components/formAdd.vue';


export default {
  name: 'App',
  components: {
    formObjectVue,
    formLanguagesVue,
    formAdd
  },
  computed:{
        SelectedLang(){
            return this.$store.state.selectedLang;
        },
        Addform(){
            return this.$store.state.addForm;
        },
        Titles(){
            return this.$store.state.titles;
        },
       },  
  methods:{
    formCleaner(){
      this.$store.commit("formClear");
      this.formAdd(true);
    },
    formAdd(val){
      this.$store.commit("formAdd",val);
    },
    swap(){
      let swp=[(document.getElementById("tofrom").value-1),(document.getElementById("fromto").value-1)]
      this.$store.commit("formSwap",swp);
    }
  }
  ,
  created() {
    this.$watch('SelectedLang', (a) => {//Dil değiştiğinde otomatik olarak Title'ı değiştirmek için
      if(a!=0)
      {this.$store.commit("languageTitleChange",(document.getElementById("title-input").value))
      let titlefind=false;
      for(var i=0;i<this.Titles.length;i++)
      {
        if(this.Titles[i].lang==this.SelectedLang)
        {
          titlefind=true;
          document.getElementById("title-input").value=this.Titles[i].title;
        }
      }
      if(titlefind==false){document.getElementById("title-input").value=""}
    }
      
      })
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
font-family: 'Roboto Condensed', sans-serif;
}
.radiobtn{
  border:0px !important; 
}
*{font-family: 'Roboto', sans-serif;
font-family: 'Roboto Condensed', sans-serif;}
.content{
  background-color: rgb(248, 244, 255,0.6);
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer{
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  width: 95%;
}
</style>
