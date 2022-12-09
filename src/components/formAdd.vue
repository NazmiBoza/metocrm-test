<template>
  <div class="form-add-bg">
    <div class="form-add">
      <div class="d-inline-flex w-100  justify-content-between h-full">
        <h4 style="margin-left: 1rem;margin-top: 1rem;">Add Form Input</h4>
         
      <h4 @click="formClearandClose()" style="margin-right: 1rem;margin-top: 0.5rem;">x</h4></div>
      <p>Input Type</p>
    <select class="form-control" id="inputType" style="width: 25rem;margin-top: 0.5rem;">
      <option value="main">Selectbox</option>
    </select>
      <p>Is Required</p>
      <div v-on:change="changeRequired()" class="d-inline-flex gap-4"> <div id="form-check" class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    No
  </label>
</div></div>
<input id="quest" class="form-control" type="text" placeholder="Question" style="width: 25rem;margin-top: 0.5rem;">
<input id="desc" class="form-control" type="text" placeholder="Description" style="width: 25rem;margin-top: 0.5rem;">
<p style="margin-top: 0.5rem;">Options</p>
<div id="text_selected" style="display: none;">        
  <p>Max Lenght</p>               
    
</div>

<div v-if="(FormOptions!=0)" id="add_options_block"  class="options">
  <div :id="(item+100)" v-for="item in FormOptions" :key=item.id class="optionsettings"> <!--Form'da Daha Fazla Seçenek Ekleme Kısmı-->
    <div   class="d-inline-flex  mt-2" >
      <input :id="(item+1000)"  class="form-control" type="text">
      <button :id="item" @click="select($event)" class="x-button">
      <svg class="svg-icon" style="width: 30px; margin-left: 6px;" viewBox="0 0 20 20">
							<path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417
               M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,
               10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,
               0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,
               0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
						</svg>
        </button>
    </div>

  </div>

</div>
<button id="add_option" @click="AddOptions()" class="btn btn-primary" style="margin-top: 1rem;">+Add Option</button>
<div class="d-inline-flex w-100  justify-content-between h-full">
  <button @click="formClearandClose();" class="btn btn-danger" style="margin-left: 1rem; margin-bottom: 1rem;">Close</button>
  <button @click=" formOptions();form_Create();  formClearandClose();AddOptions(); " class="btn btn-success" style="margin-right: 1rem; margin-bottom: 1rem;">Save</button>
</div>
    </div>
  </div>
    </template>
    <script>
    export default {
      name: 'formAdd',
      computed:{
        FormOptions(){
            return this.$store.state.formOptions;
        }
      },
      methods:{
        AddOptions(){
            this.$store.commit("addOptions")
        },
        form_Create(){//Form burada oluşturuluyor
        let formInfo={lang:this.$store.state.selectedLang, question:this.$store.state.form_created, formName:(document.getElementById("quest").value), 
        isRequired:this.$store.state.form_isRequired,formDescription:document.getElementById("desc").value,formOptions:this.$store.state.form_options};
        this.$store.commit("formCreate",formInfo);
        },
        
        changeRequired(){
          this.$store.commit("changeRequired")
        }
        ,
        formOptions(){
          let formoptionsarray=[];
          if(this.FormOptions!=0)
          {
            for(let itemid=1;itemid<(this.FormOptions+1);itemid++){
               formoptionsarray.push(document.getElementById(itemid+1000).value);
                }
          }
          this.$store.commit("formOptions",formoptionsarray);
        },
        formClearandClose(){//Form ekleme işlemi bittikten sonra sayfanın kapanması ve elementlerin sıfırlanması için
          this.$store.commit("formAdd",false);
          if(this.FormOptions!=0)
          {
            for(let itemid=1;itemid<(this.FormOptions+1);itemid++){
              const element = document.getElementById(itemid+1000);
              element.remove(); 
              }
          }
          const $select = document.querySelector('#inputType');
          $select.value = 'main';
          document.getElementById("exampleRadios1").checked = true;
          document.getElementById("quest").value = "";
          document.getElementById("desc").value = "";
          
        },
        select: function(event) {
            let targetId = parseInt(event.currentTarget.id)+100;
       
            document.getElementById(targetId).style.display = "none";
          },
       
       }
    }

 
    </script>
  <style>
  .form-add-bg{
    background-color: rgba(14, 14, 14, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
  }
  .form-add{
    background-color: rgba(255, 255, 255, 1);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
  }
  .x-button{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  }
  </style>