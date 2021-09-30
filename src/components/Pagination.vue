<template>
  <div class="pagination news-pagination d-flex justify-content-center ">
    <button class="arrow-btn" @click.prevent="previousPage">
      Prev
    </button>
    <div class="d-flex align-item-center">
      <div class="text-center p-2">
        {{ pageNum }}
      </div>
      <div class="text-center p-2">/</div>
      <div class="text-center p-2">{{ totalPages }}</div>
    </div>
    <button class="arrow-btn" @click.prevent="nextPage">
      Next
    </button>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      default: 1,
      require: true,
    },
  },
  data() {
    return {
      pageNum: 1,
    };
  },
  methods: {
    previousPage() {
      if (this.pageNum > 1) this.pageNum -= 1;
      this.$emit('pageChange', this.pageNum);
    },
    nextPage() {
      if (this.pageNum < this.totalPages) {
        this.pageNum += 1;
        this.$emit('pageChange', this.pageNum);
      }
    },
  },
};
</script>
<style lang="css" scoped>
.news-pagination {
  width: 40%;
}
.arrow-btn {
  outline: none;
  border: 0;
  background: none;
  color: rgb(104, 104, 104);
}
.arrow-btn:hover{
    color: rgb(151, 151, 151);
}

</style>
