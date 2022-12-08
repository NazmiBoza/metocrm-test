import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages:["TR","EN","DE","FR"],
    selectedLang:"TR",
    addForm:false,
    formOptions:0,
    form_created:0,
    form_name:"",
    form_isRequired:true,
    form_description:"",
    form_text_max:0,
    form_options:[],
    form_id:0

  },
  getters: {
  },
  mutations: {
    langChange(state,lang){
      state.selectedLang=lang;
    },
    formAdd(state,is){
      state.addForm=is;
    }
    ,
    addOptions(state){
      state.formOptions++
    },
    formObjectName(state,name){
      state.form_name=name;
      state.form_created++;
    },
    formObjectDesc(state,desc)
    {
      state.form_description=desc;
    },
    formTextMax(state,txtmax){
      state.form_text_max=txtmax;
    },
    formOptions(state,opt){
      state.form_options=opt;
    },
    formClear(state){
      state.formOptions=0;
      state.form_name="";
      state.form_isRequired=true;
      state.form_description="";
      state.form_text_max=0;
      state.formOptions=[];
    },
    formIdPlus(state){
      state.form_id++;
    },
    changeRequired(state){
      if(state.form_isRequired==true)
      {state.form_isRequired=false;}
      else{state.form_isRequired=true;}
      console.log("changed");
    }
  },
  actions: {
  },
  modules: {
  }
})
