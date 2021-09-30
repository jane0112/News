<template>
  <div class="news-container pt-5 p-md-4">
    <div>
      <h1>{{ newsDetail.title }}</h1>
    </div>
    <div class="author-box">
      <div>Published {{ publishTime(newsDetail.publishedAt) }}</div>
      <div>BY {{ newsDetail.author }}</div>
    </div>
    <div
      :style="`background-image:url('${newsDetail.urlToImage}')`"
      class="image my-3"
    ></div>
    <p class="mt-5">
      {{ newsDetail.content }}
    </p>
    <a>Source: {{ newsDetail.sourceName }}</a>
    <div class="d-flex align-item-center justify-content-end w-100">
      <button @click.prevent="goBack" class="btn d-block btn-back p-0">
        Back
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsDetail: {
        content: '',
        urlToImage: '',
        title: '',
        publishedAt: '',
        author: '',
        sourceName: '',
      },
    };
  },
  mounted() {
    const newsInfo = this.$route.query;
    this.newsDetail = newsInfo;
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/' });
    },
    publishTime(publishTime) {
      const date = publishTime.split('T')[0];
      const time = publishTime.split('T')[1];
      return publishTime
        ? date + ' ' + time.replace('Z', '')
        : '';
    },
  },
};
</script>
<style lang="css" scoped>
.btn-back {
  background: none;
  border-radius: 0;
  font-weight: 700;
  border-bottom: 1px solid #131422;
}
.btn-back:hover {
  color: #3aa1b0;
  border-bottom: 1px solid #3aa1b0;
}
.author-box {
  color: rgb(155, 154, 154);
  /* font-size: 14px; */
}
.image {
  width: 100%;
  height: 60vh;
  background-position: center;
  background-size: cover;
}
.news-container {
  width: 70%;
  margin: auto;
}
@media (max-width: 576px) {
  .news-container {
    width: 90%;
    /* padding:10px */
  }
  .image {
    width: 100%;
    height: 30vh;
  }
}
</style>
