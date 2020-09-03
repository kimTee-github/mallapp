<template>
    <div>
      <div class="user_login" @click="to">
          <div ></div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        to(){
            this.$router.push({
                path:'/detailPage'
            })
        }
    },
}
</script>
<style scoped>
.user_login{
    width: 100%;
    height: 400px;
    background: #0273FF;
}
</style>