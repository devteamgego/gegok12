<template>
    <div class="">
        <div class="bg-white shadow px-4">
            <div v-if="this.success!=null" class="alert alert-success" id="success-alert">{{this.success}}</div>
            <div class="py-3">
                <div class="flex items-center">
                    <img :src="school_logo_display" class="img-responsive w-20 h-20 rounded-full">
                    <div class="mx-2">
                        <label class="tw-label cursor-pointer text-xs text-gray-600"> Change School Logo
                            <input type="file" size="60" name="school_logo" id="school_logo" @change="OnFileSelected">
                            <span v-if="errors.school_logo" class="text-red-500 text-xs font-semibold">{{errors.school_logo[0]}}</span>
                        </label> 
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="name" class="tw-form-label">School Name<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="name" v-model="name" id="name" class="tw-form-control w-full" placeholder="Enter School Name">
                        </div>
                        <span v-if="errors.name" class="text-red-500 text-xs font-semibold">{{errors.name[0]}}</span>
                    </div>
                </div>
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="moto" class="tw-form-label">School Moto<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="moto" v-model="moto" id="moto" class="tw-form-control w-full" placeholder="Enter School Moto">
                        </div>
                        <span v-if="errors.moto" class="text-red-500 text-xs font-semibold">{{errors.moto[0]}}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="affiliated_by" class="tw-form-label">Affiliated By<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="affiliated_by" v-model="affiliated_by" id="affiliated_by" class="tw-form-control w-full" placeholder="Affiliated By">
                        </div>
                        <span v-if="errors.affiliated_by" class="text-red-500 text-xs font-semibold">{{errors.affiliated_by[0]}}</span>
                    </div>
                </div>

                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="affiliation_no" class="tw-form-label">Affiliation No.<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="affiliation_no" v-model="affiliation_no" id="affiliation_no" class="tw-form-control w-full" placeholder="Affiliation No">
                        </div>
                        <span v-if="errors.affiliation_no" class="text-red-500 text-xs font-semibold">{{errors.affiliation_no[0]}}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="date_of_establishment" class="tw-form-label">Date Of Establishment<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="date" name="date_of_establishment" v-model="date_of_establishment" id="date_of_establishment" class="tw-form-control w-full">
                        </div>
                        <span v-if="errors.date_of_establishment" class="text-red-500 text-xs font-semibold">{{errors.date_of_establishment[0]}}</span>
                    </div>
                </div>

                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2"> 
                            <label for="board" class="tw-form-label">Board Of Education<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <select name="board" v-model="board" id="board" class="tw-form-control w-full">
                                <option value="" disabled="disabled">Select board</option>
                                <option v-for="boards in boardlist" v-bind:value="boards.id">{{ boards.name }}</option>
                            </select>
                            <span v-if="errors.board" class="text-red-500 text-xs font-semibold">{{errors.board[0]}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="landline_no" class="tw-form-label">Landline No<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="landline_no" v-model="landline_no" id="landline_no" class="tw-form-control w-full" placeholder="Landline No">
                        </div>
                        <span v-if="errors.landline_no" class="text-red-500 text-xs font-semibold">{{errors.landline_no[0]}}</span>
                    </div>
                </div>
            </div>

            <portal-target name="edit_school_address"></portal-target>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="country" class="tw-form-label">Country<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <select class="tw-form-control w-full" id="country_id" v-model="country_id" name="country_id">
                                <option value="" disabled>Select Country</option>
                                <option v-for="country in countrylist" v-bind:value="country.id">{{country.name}}</option>
                            </select>
                        </div>
                        <span v-if="errors.country_id" class="text-red-500 text-xs font-semibold">{{errors.country_id[0]}}</span>
                    </div>
                </div>

                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="state" class="tw-form-label">State<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <select class="tw-form-control w-full" id="state_id" v-model="state_id" name="state_id">
                                <option value="" disabled>Select State</option>
                                <option v-for="state in statelist[this.country_id]" v-bind:value="state.id">{{state.name}}</option>
                            </select>  
                        </div>
                        <span v-if="errors.state_id" class="text-red-500 text-xs font-semibold">{{errors.state_id[0]}}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="city" class="tw-form-label">City<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <select class="tw-form-control w-full" id="city_id" v-model="city_id" name="city_id">
                                <option value="" disabled>Select City</option>
                                <option v-for="city in citylist [this.state_id]" v-bind:value="city.id">{{city.name}}</option>
                            </select>   
                        </div>
                        <span v-if="errors.city_id" class="text-red-500 text-xs font-semibold">{{errors.city_id[0]}}</span>
                    </div>
                </div>

                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="pincode" class="tw-form-label">Pincode<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" class="tw-form-control w-full" v-model="pincode" name="pincode" id="pincode"  placeholder="Enter Pincode">
                        </div>
                        <span v-if="errors.pincode" class="text-red-500 text-xs font-semibold">{{errors.pincode[0]}}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="about_us" class="tw-form-label">About Us<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <textarea type="textarea" name="about_us" v-model="about_us" id="about_us" class="tw-form-control w-full" placeholder="Enter About Us"></textarea>
                        </div>
                        <span v-if="errors.about_us" class="text-red-500 text-xs font-semibold">{{errors.about_us[0]}}</span>
                    </div>
                </div>
                <div class="tw-form-group w-full lg:w-1/2">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="website" class="tw-form-label">Website</label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <input type="text" name="website" v-model="website" id="website" class="tw-form-control w-full" placeholder="Enter Website">
                        </div>
                        <span v-if="errors.website" class="text-red-500 text-xs font-semibold">{{errors.website[0]}}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <div class="tw-form-group w-full lg:w-1/3">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="admission_open" class="tw-form-label">Admission Open Status<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <label class='toggle-label'>
                                <input type='checkbox' v-model="admission_open" id="admission_open" @click="checkStatus($event)">
                                <span class='back'>
                                    <span class='toggle'></span>
                                    <span class='label on'>ON</span>
                                    <span class='label off'>OFF</span> 
                                </span>
                            </label>
                        </div>
                        <span v-if="errors.admission_open" class="text-red-500 text-xs font-semibold">{{errors.admission_open[0]}}</span>
                    </div>
                </div>
                
                <input type="hidden" name="admission_open" :value="this.admission_open">
                <input type="hidden" name="admission_close_message" :value="this.admission_close_message">
                <input type="hidden" name="admission_close_on" :value="this.admission_close_on">

                <div class="tw-form-group w-full lg:w-1/3">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="admission_close_message" class="tw-form-label">Admission Closed Message<span class="text-red-500">*</span></label>
                        </div>
                        <div class="w-full lg:w-3/4 my-2">
                            <textarea type="textarea" name="admission_close_message" v-model="admission_close_message" id="admission_close_message" class="tw-form-control w-full" placeholder="Admission Closed Message"></textarea>
                        </div>
                        <span v-if="errors.admission_close_message" class="text-red-500 text-xs font-semibold">{{errors.admission_close_message[0]}}</span>
                    </div>
                </div>
                <div class="tw-form-group w-full lg:w-1/3">
                    <div class="lg:mr-8 md:mr-8">
                        <div class="mb-2">
                            <label for="admission_close_on" class="tw-form-label">Admission Closes On<span class="text-red-500">*</span></label>
                        </div>
                        <div class="mb-2 flex items-center relative">
                            <datetime format="DD-MM-YYYY h:i:s" name="admission_close_on" v-model="admission_close_on" class="w-full rounded" id="admission_close_on"></datetime>
                                <div class="absolute right-0">
                                    <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current text-gray-500 mx-2"><g><path d="m144 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m144 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m144 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m272 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m272 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m272 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m400 249h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m400 313h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m400 377h-32c-8.284 0-15 6.716-15 15s6.716 15 15 15h32c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path><path d="m467 65h-36v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-130v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-130v-25c0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-36c-24.813 0-45 20.187-45 45v332c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45 0-9.682 0-323.575 0-332 0-24.813-20.187-45-45-45zm-437 45c0-8.271 6.729-15 15-15h36v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h130v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h130v25c0 8.284 6.716 15 15 15s15-6.716 15-15v-25h36c8.271 0 15 6.729 15 15v59h-452zm437 347h-422c-8.271 0-15-6.729-15-15v-243h452v243c0 8.271-6.729 15-15 15z"></path></g></svg>
                                </div>
                            </div>
                        <span v-if="errors.admission_close_on" class="text-red-500 text-xs font-semibold">{{errors.admission_close_on[0]}}</span>
                    </div>
                </div>
            </div>

            <portal-target name="submit-btn"></portal-target>
            <portal to="submit-btn">
                <div class="py-3">
                    <a href="#" dusk="submit-btn" class="btn btn-primary submit-btn" @click="updateDetails()">Submit</a>
                    <a href="#" class="btn btn-reset reset-btn" @click="resetForm()">Reset</a>
                    <input type="submit" class="hidden" id="submit-btn">
                </div>
            </portal>
        </div>
    </div>
</template>


<script>
    import datetime from 'vuejs-datetimepicker';
    export default {
        props:['url','school_id'],
        components: {
            datetime,
        },
        data(){
            return{
                details:[],
                name:'',
                moto:'',
                affiliated_by:'',
                affiliation_no:'',
                date_of_establishment:'',
                board:'',
                school_logo:'',
                school_logo_display:'',
                landline_no:'',
                about_us:'',
                country_id:7,
                state_id:'',
                city_id:'',
                pincode:'',
                website:'',
                admission_open:'',
                admission_close_message:'',
                admission_close_on:'',
                countrylist:[],
                statelist:[],
                citylist:[],
                boardlist:[ {id:'stateboard' , name:'State Board'} , {id:'matric' , name:'Matriculation'} , {id:'cbse' , name:'CBSE'} , {id:'icse' , name:'ICSE'} , {id:'ib' , name:'IB'} ],
                errors:[],
                success:null,
            }
        },
        
        methods:
        {
            getDetails()
            {
                axios.get('/admin/schooldetails/edit/'+this.school_id).then(response => {
                    this.details= response.data.details;
                    this.setDetails();
                    //console.log(this.details);               
                });      
            },

            setDetails()
            {
                if(Object.keys(this.details).length > 0)
                {
                    this.moto                       = this.details.moto;
                    this.affiliated_by              = this.details.affiliated_by;
                    this.affiliation_no             = this.details.affiliation_no;
                    this.date_of_establishment      = this.details.date_of_establishment;
                    this.board                      = this.details.board;
                    this.school_logo_display        = this.details.school_logo_display;
                    this.landline_no                = this.details.landline_no;
                    this.about_us                   = this.details.about_us;
                    this.country_id                 = this.details.country_id;
                    this.state_id                   = this.details.state_id;
                    this.city_id                    = this.details.city_id;
                    this.pincode                    = this.details.pincode;
                    this.website                    = this.details.website;
                    this.admission_open             = this.details.admission_open;
                    this.admission_close_message    = this.details.admission_close_message;
                    this.admission_close_on         = this.details.admission_close_on;
                    this.name                       = this.details.name;

                    this.countrylist                = this.details.countrylist;
                    this.statelist                  = this.details.statelist;
                    this.citylist                   = this.details.citylist;
                }
            },

            checkStatus(e)
            {
                if(e.target.checked == true)
                {
                    this.admission_open = 1;
                }
                else if(e.target.checked == false)
                {
                    this.admission_open = 0;
                    this.admission_close_message = '-';
                    this.admission_close_on = '-';
                }
            },

            updateDetails()
            {
                this.errors=[];
                this.success=null;  

                let formData=new FormData();

                formData.append('name',this.name);         
                formData.append('moto',this.moto);         
                formData.append('affiliated_by',this.affiliated_by);          
                formData.append('affiliation_no',this.affiliation_no);          
                formData.append('date_of_establishment',this.date_of_establishment);          
                formData.append('board',this.board);          
                formData.append('school_logo',this.school_logo);          
                formData.append('landline_no',this.landline_no);          
                formData.append('about_us',this.about_us);          
                formData.append('country_id',this.country_id);          
                formData.append('state_id',this.state_id);          
                formData.append('city_id',this.city_id);          
                formData.append('pincode',this.pincode);
                formData.append('website',this.website);
                formData.append('admission_open',this.admission_open);
                formData.append('admission_close_message',this.admission_close_message);
                formData.append('admission_close_on',this.admission_close_on);
              
                axios.post('/admin/schooldetails/update/validationUpdate/'+this.school_id,formData).then(response => {              
                    $('#submit-btn').click();
                }).catch(error => {
                    this.errors = error.response.data.errors;
                });
            },

            OnFileSelected(event)
            {
                this.school_logo = event.target.files[0];
                //console.log(this.school_logo)
            },
        },        

        created()
        {
            this.getDetails();
        }
    }
</script>

<style scoped>
    .tw-label{
        color:#3492e2;
    }
    .tw-label input[type="file"] {
        display: none;
    }
</style>