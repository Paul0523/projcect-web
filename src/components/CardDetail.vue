<template lang="pug">
  div(class="card-detail")
    div(class="card-detail-content")
    div(class="card-detail-remark")
</template>
<script>
export default {
  mounted () {
    // 加载card详情
    var recordId = this.$route.query.recordId
    var data = {'record_id': recordId}
    this.$axios.get('/api/record/record_detail', {params: data}).then(res => {
      if (res.data.status === 200) {
        console.log(res.data.data)
      }
    })
  }
}
</script>
<style lang="scss">
.card-detail {
  .card-detail-content {
    background: lightblue;
    height: 200px;
    width: 100%;
  }
}
</style>
