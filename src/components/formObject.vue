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
            document.getElementById(targetId).style.display = "none";
          },
      selam(){
      }
  },
  created() {
    this.$watch('Form_created', (a) => {
      if(a!=0)
      {
            document.querySelectorAll(".form-object-main").forEach(el => el.remove()); 
       
        for(let counter=1;counter<(a+1);counter++)//Formları Seçilen Dil'e göre otomatik olarak ekranda oluşturmak için.
        {
          if(this.Form_items[counter-1].lang==this.SelectedLang)
          {
          var selectbox="";
          var required="";
            for(var item in this.Form_items[(counter-1)].formOptions) {
          selectbox+= `<option>${this.Form_options[item]}</option>`
            }
            this.formIdPlus();
            var list = document.getElementById("forms");
            if(this.Form_items[(counter-1)].isRequired==true){
            required=`<p style="color:red;">*this field is required</p>`;
            }
            selectbox += `</select> ${required} </div></div>`
            list.innerHTML += `<div id="newForm"  style="display:flex;" class="form-object-main">
            
            <div id="main${this.formId}"  class="form-object">
      <h2 style="align-self: start;margin-top: 1rem;margin-left: 5rem;">${this.Form_items[counter-1].formName}</h2>
      
      <p style="align-self: start;margin-left: 5rem;">${this.Form_items[(counter-1)].formDescription}</p>
      <select style="width: 20rem;" class="form-control" id="inputType${this.formId}" >${selectbox} `;
        
        
      }
      
        }
        

 
      
     }})
  },
  computed:{
    Form_items(){
      return this.$store.state.Forms;
    },
    Form_created(){
            return this.$store.state.form_created;
        },
    SelectedLang(){
            return this.$store.state.selectedLang;
        },
    Form_isRequired(){
            return this.$store.state.form_isRequired;
        },
    Form_type(){
            return this.$store.state.form_type;
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
