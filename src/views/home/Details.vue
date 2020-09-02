<template>
    <div>
        
    </div>
</template>
<script>

export default {
    mounted() {
        let id = this.$route.query.id
        console.log(id);
        this.$store.dispatch("getDetails",id);
    },
}
</script>