<template>
<div>
   <ul class="list-reset flex text-xs profile-tab flex-wrap">
    <li class="px-2 mx-3 py-3" v-bind:class="[{'active' : event_tab === '1'}]" >
    <a href="#" class="text-gray-700 font-medium" @click="setEventTab('1')">Description</a>
  </li>
  <li class="px-2 mx-3 py-3" v-bind:class="[{'active' : event_tab === '2'}]" >
    <a href="#" id="photos" class="text-gray-700 font-medium" @click="setEventTab('2')">Photos</a>
  </li>
 
  <li class="px-2 mx-3 py-3" v-bind:class="[{'active' : event_tab === '3'}]">
    <a href="#" id="notes" class="text-gray-700 font-medium" @click="setEventTab('3')">Notes</a>
  </li>
</ul>
<portal to="events">
  
      <eventdescription :url="this.url" :id="this.id"></eventdescription>
        <eventgallery :url="this.url" :event_id="this.id"></eventgallery>
        <div class="px-3 overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto py-3" v-bind:class="[this.event_tab==3?'block' :'hidden']">
        <notes :url="this.url" :entity_id="this.entity_id" entity_name="event" :school_id="this.school_id"></notes>
        </div>
</portal>


</div>

</template>

<script>
  import PortalVue from "portal-vue";
  import { bus } from "../../../app";
  import notes from '../../notes';
  import eventdescription from './Description';
  import eventgallery from './Gallery';

  export default {
    props:['url','entity_id','school_id','event_id','id'],
      data () {
         return {
               event_tab:'1',
              
             }
       },
        components: {
    eventdescription,
    eventgallery,
    notes,
  },
         methods:{
      
     
      setEventTab(val)
      {
          this.event_tab=val;
          bus.$emit("dataEventTab", this.event_tab);
      }
  },
      created()
      {
        //alert(this.id);
          bus.$emit("dataEventTab", this.event_tab);
       
          bus.$on("dataEventTab", data => {
          if(data!='')
            {
              this.event_tab=data;                   
          
            }
           });

          
      }
  
 
  }
</script>