<template>
<div class="">
<div>
	<!-- <div class="group" v-if="parseInt(this.count)<=parseInt(this.no_of_groups)"> -->
	<div v-if="this.success!=null" class="alert alert-success" id="success-alert">{{this.success}}</div>


  <div class="my-5">
          <div class="tw-form-group w-3/4">

    <div class="lg:mr-8 md:mr-8 flex items-center w-full">
      <div class="mb-2 w-1/4">
        <label for="standard_id" class="tw-form-label">Select Class</label>
      </div>
      <div class="mb-2 w-1/4">
        <select class="tw-form-control w-full" id="standard_id" v-model="standard_id" name="standard_id">
          <option value="" disabled>Select Class</option>
         <option value="" v-for="standard in standardlist" v-bind:value="standard.id">{{standard.standard_name}}-{{standard.section_name}}</option>
        </select>
      </div>
      <span v-if="errors.standard_id"><p class="text-red-500 text-xs font-semibold">{{errors.standard_id[0]}}</p></span>
    </div> 

  </div>
</div> 


<!--end-->
<!--start-->

    <div class="my-5">
          <div class="tw-form-group w-3/4">

          <div class="lg:mr-8 md:mr-8 flex items-center w-full">
            <div class="mb-2 lg:w-1/4">
                <label for="name" class="tw-form-label">Subject Name</label>
            </div>
            <div class="mb-2 w-1/4">
              <input type="text" name="name" id="name" v-model="name" class="tw-form-control w-full">
            </div>
          </div>
            <span v-if="errors.name" class="text-red-500 text-xs font-semibold">{{errors.name[0]}}</span>
          </div>
    </div>


<!--end-->
<!--start-->

    <div class="my-5">
          <div class="tw-form-group w-3/4">

          <div class="lg:mr-8 md:mr-8 flex items-center w-full">
            <div class="mb-2 lg:w-1/4">
                <label for="code" class="tw-form-label">Subject Code</label>
            </div>
            <div class="mb-2 w-1/4">
              <input type="text" name="code" id="code" v-model="code" class="tw-form-control w-full">
            </div>
          </div>
            <span v-if="errors.code" class="text-red-500 text-xs font-semibold">{{errors.code[0]}}</span>
          </div>
    </div>

<!--end-->
<!--start-->


    <div class="my-5">
          <div class="tw-form-group w-3/4">

          <div class="lg:mr-8 md:mr-8 flex items-center w-full">
            <div class="mb-2 lg:w-1/4">
                <label for="type" class="tw-form-label">Type</label>
            </div>
            <div class="mb-2 w-1/4">
             <select v-model="type" class="repeats tw-form-control w-full" placeholder = "Select type" id="type">
             <option value="core">Core</option>
              <option value="elective">Elective</option>
              </select>
            </div>
          </div>
            <span v-if="errors.type" class="text-red-500 text-xs font-semibold">{{errors.type[0]}}</span>
          </div>
      </div>

<!--end-->
<!--start-->


	<div class="my-6">
      <a href="#" id="submit-btn" class="btn btn-submit blue-bg text-white rounded px-3 py-1 mr-3 text-sm font-medium" @click="checkForm()">Submit</a>
    		<a href="#" class="btn btn-reset bg-gray-100 text-gray-700 border rounded px-3 py-1 mr-3 text-sm font-medium" @click="reset()">Reset</a>
      		
    	</div>


<!--end-->
<!--start-->

</div>


  </div>
</template>


<script>
	export default {
    props:[],
      data(){
        return{

        	subject:[],
            standardlist:[],
            standard_id:'',
            name:'',
            code:'',
            type:'',


          	errors:[],
          	success:null,
        }
      },
        
      methods:
        {
        	reset()
            {
              this.standard_id='';
              this.name='',
              this.code='';  
              this.type='';  
             
            }, 

            checkForm()
            {
              this.errors=[];
              this.success=null; 

              let formData=new FormData();

              formData.append('standard_id',this.standard_id);                 
              formData.append('name',this.name);                 
              formData.append('code',this.code);                 
              formData.append('type',this.type);                 
                        
              
        	  axios.post('/admin/subjects/add',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
                this.subject = response.data;     
          			this.success = response.data.success;
          			this.resetForm();
                //console.log(this.work);
        		}).catch(error => {
          			this.errors = error.response.data.errors;
                });
            },



            getData()
          {
            axios.get('/admin/subjects/list').then(response => {
                this.standardlist = response.data.standardlist;
               
                //console.log(this.standardlist);
                  
            });
          },


        },
      created()
      {
      	this.getData();
      	//alert(this.standard_id);
      }
  }
</script>
