<template> 
	<div class="">
		<h1 class="admin-h1 my-3">Change Password</h1>
		<div class="bg-white shadow border border-grey px-5">
			<div v-if="this.success!=null" class="font-muller alert alert-success" id="success-alert">{{this.success}}</div>
   		<div class="tw-form-group my-2">
	      <div class="mb-2">
	        <label class="tw-form-label">Old Password</label>
	      </div>
	      <div class="">
	   	    <input type="password" v-model="oldpassword" id="oldpassword" dusk="old-password-input" name="oldpassword" class="tw-form-control w-full lg:w-128" placeholder="xxxxxxxxxx"> 
	      </div>
      </div>
      <span v-if="errors.oldpassword" class="text-red-500 text-xs font-semibold">{{errors.oldpassword[0]}}</span>

      <div class="tw-form-group my-2">
		    <div class="mb-2">
		      <label class="tw-form-label">New Password</label>
		    </div>
		    <div class="">
		      <input type="password" v-model="newpassword" id="newpassword" name="newpassword" class="tw-form-control w-full lg:w-128" dusk="new-password-input" placeholder="xxxxxxxxxx">
		    </div>
      </div>
      <span v-if="errors.newpassword" class="text-red-500 text-xs font-semibold">{{errors.newpassword[0]}}</span>

      <div class="tw-form-group my-2">
		    <div class="mb-2">
		      <label class="tw-form-label">Confirm Password</label>
		    </div>
		    <div class="">
		      <input type="password" v-model="confirmpassword" id="confirmpassword" name="confirmpassword" class="tw-form-control w-full lg:w-128" dusk="confirm-password-input" placeholder="xxxxxxxxxx">
		    </div>
      </div>
      <span v-if="errors.confirmpassword" class="text-red-500 text-xs font-semibold">{{errors.confirmpassword[0]}}</span>
	    <div class="my-6">
        <a href="#" id="submit" dusk="submit-button" class="btn btn-primary submit-btn" @click.prevent="submitForm()">Submit </a>
	   </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
		    oldpassword:'',
		    newpassword:'',
		    confirmpassword:'',
		    errors:[],   
		    success:null,
      }
    },

    methods:
    {
		  submitForm()
		  {
		    this.errors=[];

		    axios.post('/admin/changepassword',{
		      oldpassword:this.oldpassword,
		      newpassword:this.newpassword,
		      confirmpassword:this.confirmpassword  
		    }).then(response => {
		      this.success = response.data.message;
		      this.resetForm();
		    }).catch(error => {
		      this.errors = error.response.data.errors;
		    });
		  },

		  resetForm()
		  {
		    this.oldpassword='',
		    this.newpassword='',
		    this.confirmpassword=''
		  }
    },
  }
</script>