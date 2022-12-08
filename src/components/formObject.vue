<template>
<div id="forms" >
</div>
</template>
<script>
export default {
  name: 'formObject',
  methods:{
    formIdPlus(){
      this.$store.commit("formIdPlus");
    },
    select: function(event) {
            let targetId = ("main"+event.currentTarget.id);
            console.log("selam");
            document.getElementById(targetId).style.display = "none";
          }
  },
  created() {
    this.$watch('Form_created', (a) => {
      if(a!=0)
      {
        var selectbox="";
        var required="";
        this.formIdPlus();
        var list = document.getElementById("forms");
        
        for(var item in this.Form_options){
        selectbox+= `<option>${this.Form_options[item]}</option>`
      }
      if(this.Form_isRequired==true){
        required=`<p style="color:red;">*this field is required</p>`;
      }
      selectbox += `</select> ${required} </div></div>`
      
      }
        list.innerHTML += `<div  style="display:flex;" class="form-object-main">
            
            <div id="main${this.formId}"  class="form-object">
      <h2 style="align-self: start;margin-top: 1rem;margin-left: 5rem;">${this.Form_name}</h2>
      
      <p style="align-self: start;margin-left: 5rem;">${this.Form_description}</p>
      <select style="width: 20rem;" class="form-control" id="inputType${this.formId}" >${selectbox} `;
      
    })
  },
  computed:{
    
    Form_created(){
            return this.$store.state.form_created;
        },
    Form_name(){
            return this.$store.state.form_name;
        }
        ,
    Form_isRequired(){
            return this.$store.state.form_isRequired;
        }
        ,
    Form_description(){
            return this.$store.state.form_description;
        }
        ,
    Form_type(){
            return this.$store.state.form_type;
        }
        ,
    Form_text_max(){
            return this.$store.state.form_text_max;
        }
        ,
    Form_options(){
            return this.$store.state.form_options;
        }
        ,
    formId(){
        return this.$store.state.form_id;
    }
      }
}
</script>
<style>
.form-object{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  border-radius: 0.2rem;
  width: 30rem;
  height: 15rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

</style>
