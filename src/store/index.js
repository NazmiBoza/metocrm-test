import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages:["TR","EN","DE","FR"],//Tüm Diller
    selectedLang:"TR",//Seçili Dil (Varsayılan TR)
    oldSelectedLang:"",//Dil değiştirildiğinde bir önceki seçilen dili hafızaya alıyor (title değişimleri için)
    addForm:false,//Soru ekleme ekranını otomatik açıp kapamak için oluşturduğum bir bool
    formOptions:0,//Sorudaki toplam seçenek sayısı
    form_created:0,//form oluşturulduğunda arayüz güncellensin diye arttırdığm değişken
    form_isRequired:true,//Formun zorunlu seçenek olup olmadığını kontrol amaçlı
    form_id:0,//Oluşturulan formların id'si
    Forms:[],//Formları obje halinde bu array'e atıyorum
    titles:[]//Farklı dillerdeki Title'ları kayıt etmek için
  },
  getters: {
  },
  mutations: {
    formCreate(state,add){
      state.Forms.push(add);//Yeni Formları Array'e Gönderiyorum
      state.form_created++;
    },
    languageTitleChange(state,titlechange){//Bu fonksiyon daha önce belirtilen dilde başlık varsa onu değiştiriyor yoksa sıfırdan oluşturuyor.
      let titlefind=false;
      for(var i=0;i<state.titles.length;i++)
      {
        if(state.titles[i].lang==state.oldSelectedLang)
        {
          titlefind=true;
          state.titles[i].title=titlechange;
        }
      }
      if(titlefind==false){state.titles.push({lang:state.oldSelectedLang,title:titlechange})}
    },
    formSwap(state,swp){//Formların sırasını değiştirmek için kullanıyorum
      state.Forms.splice(swp[0],0,state.Forms[swp[1]]);
      state.Forms.splice((swp[1]+1),1); 
      state.form_created++;
    }
    ,
    langChange(state,lang){//Dil değişimi için
      state.oldSelectedLang=state.selectedLang;
      state.selectedLang=lang;
      state.form_created++;
    },
    formAdd(state,is){//Form ekleme ekranını açıp kapamak için
      state.addForm=is;
    }
    ,
    addOptions(state){//Forma daha fazla seçenek eklemek için
      state.formOptions++
    },
    formOptions(state,opt){//Seçeneklerin toplamda kaç tane olduğunu belirlemek için
      state.form_options=opt;
    },
    formClear(state){//Form oluşturulduktan sonra form ekleme kısmını temizlemek için
      state.formOptions=0;
      state.form_isRequired=true;
      state.formOptions=[];
      
    },
    formIdPlus(state){//otomatik id arttırmak için
      state.form_id++;
    },
    changeRequired(state){//Zorunlu kısmı değiştirildiğinde var olanı tam tersine çevirmek için (True ise false, False ise true)
      if(state.form_isRequired==true)
      {state.form_isRequired=false;}
      else{state.form_isRequired=true;}
    }
  },
  actions: {
  },
  modules: {
  }
})
