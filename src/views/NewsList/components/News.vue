<template>
  <div class="card h-100 news-card m-3" @click.prevent="viewNews">
    <div
      class="card-img card-img-top"
      :style="`background-image:url('${newsInfo.urlToImage}')`"
    ></div>
    <div class="card-body mt-2 px-0 pt-2 pb-5">
      <h5 class="card-title">{{ newsInfo.title }}</h5>
      <div class="d-flex justify-content-start author-box mb-2 flex-wrap">
        <div>{{ newsInfo.author }}</div>
        <div class="px-1">·</div>
        <div>{{ newsInfo.publishedAt.split('T')[0] }}</div>
      </div>
      <p class="card-text py-2" v-html="newsInfo.description"></p>
      <!-- <a href="#" class="btn btn-primary">Read more</a> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'News',
  props: {
    newsInfo: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    publishedAt: function() {
      return this.newsInfo.publishedAt.split('T')[0];
    },
    img: function(){
      return this.newInfo.urlToImage ? this.newInfo.urlToImage: 'https://picsum.photos/id/1048/400/300'
    }
  },
  methods: {
    viewNews() {
      this.$router.push({
        path: '/newsDetail',
        query: {
          content: this.newsInfo.content,
          urlToImage: this.newsInfo.urlToImage,
          title: this.newsInfo.title,
          publishedAt: this.newsInfo.publishedAt,
          author: this.newsInfo.author,
          sourceName: this.newsInfo.source.name,
        },
      });
    },
  },
};
</script>
<style lang="css" scoped>
.news-card {
  cursor: pointer;
  transition: all 0.2s ease;
}
.card-img {
  height: 250px;
  width: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 0;
}
.news-card:hover {
  transform: scale(1.05);
}
.author-box {
  color: rgb(155, 154, 154);
  font-size: 14px;
}
.author-box:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgb(184, 184, 184);
  padding-top: 1rem;
}
.card {
  border: 0;
  border-radius: 0;
}
</style>
