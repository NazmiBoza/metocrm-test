<template>
    <div>
    <div class="lan">
<lan-items class="d-inline-flex " v-for="item in Languages" :key="item.id">
    <div  v-if="(Languages[0]==item)" ><input :id="item" @click="onLangChange(item)" name="options" type="radio" class="btn-check"   autocomplete="off" checked>
<label :for="item" class="btn radiobtn btn-outline-primary">{{item}}</label></div>

<div  v-if="(Languages[0]!=item)" ><input :id="item" @click="onLangChange(item)" name="options" type="radio" class="btn-check"   autocomplete="off">
<label :for="item" class="btn radiobtn btn-outline-primary">{{item}}</label></div>
</lan-items>

</div>
</div>
    </template>
    <script>



    export default {
      name: 'formLanguages',
      computed:{
        Languages(){
            return this.$store.state.languages;
        },
        SelectedLang(){
            return this.$store.state.selectedLang;
        },
       },
       methods:{
        onLangChange(lan){
            this.$store.commit("langChange",lan)
        }
       }
    }
    console.log()
    </script>
