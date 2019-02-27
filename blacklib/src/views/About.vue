<template>  
<v-dialog max-width="600px" >
 <v-btn flat slot="activator" class="success">ADD story</v-btn>
 <v-card class="purple lighten-4">
 <v-card-title >
 <h2 >Add new story</h2>
 </v-card-title>
 <v-card-text>
    <v-form class="px-3">
    <v-text-field label="Title" v-model="title" prepend-icon="folder" ></v-text-field>
    <v-textarea label="Information" v-model="content" prepend-icon="edit" ></v-textarea>
    <v-menu>
    <v-text-field  :value="due" slot="activator" label="Due date" prepend-icon="date_range" ></v-text-field>
    <v-date-picker v-model="due" ></v-date-picker>
    </v-menu>
    <v-btn flat class="success mx-0 mt-3" @click="submit">Add story</v-btn>
    </v-form>
 </v-card-text>
  </v-card>
</v-dialog>
</template>
<script>
export default{
    data(){
        return{
            title:'',
            content:'',
            due: null,
            
        }
    },
    methods:{
        submit(){
            console.log(this.title, this.content)
        }
    }
}
</script>