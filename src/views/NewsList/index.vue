<template>
  <div class="main">
    <div class="search-container">
      <h1 class="title text-center mb-3">NEWS</h1>
      <form class="search-form p-5">
        <div class="d-flex w-100 my-2">
          <div class="w-100 search-bar-wrap">
            <input
              type="text"
              class="w-100 search-bar"
              v-model="queryData.keywords"
              placeholder="Search..."
            />
          </div>
        </div>
        <div class="row ">
          <div class="col-md-8 col-sm-12">
            <div class="row my-3 mx-auto">
              <input
                type="date"
                name="startDate"
                v-model="queryData.from"
                class="d-block col-md-5 col-sm-12 search-field"
              />
              <span
                class="d-block px-2 color-white col-md-2 col-sm-12 text-center"
                >~</span
              >
              <input
                type="date"
                name="endDate"
                class="d-block col-md-5 col-sm-12 search-field"
                v-model="queryData.to"
              />
            </div>
          </div>
          <div class="col-md-4 col-sm-12 my-md-3">
            <select
              name="sort"
              class="w-100 search-field"
              v-model="queryData.sortBy"
            >
              <option value="">請選擇</option>
              <option value="relevancy">相關度</option>
              <option value="popularity">人氣</option>
              <option value="publishedAt">發布時間</option>
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-center my-3">
          <button @click.prevent="searchNews" class=" d-block search-btn">
            Search
          </button>
        </div>
      </form>
    </div>
    <div class="p-5 news-container">
      <div class="row align-items-stretch">
        <div
          v-for="(news, index) in newsList"
          :key="index"
          class="col-md-12 col-lg-6 col-sm-12 p-2"
        >
          <News :newsInfo="news" />
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <Pagination :totalPages="totalPages" @pageChange="onPageChange" />
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsList } from '../../services/newsSerivce';
import News from './components/News.vue';
import Pagination from '../../components/Pagination.vue';
export default {
  name: 'NewsList',
  components: {
    News,
    Pagination,
  },
  data() {
    return {
      queryData: {
        keywords: 'COVID-19',
        from: '',
        to: '',
        sortBy: '',
        pageNum: 1,
      },
      newsList: [],
      totalPages: 1,
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const res = await getNewsList(this.queryData);
      const { status, articles, totalResults } = res;
      if (status === 'ok') {
        this.newsList = articles;
        this.totalPages =
          totalResults % 20 !== 0
            ? Number.parseInt(totalResults / 20) + 1
            : totalResults / 20;
      } else {
        alert(res.message);
      }
    },
    searchNews() {
      this.getNews();
    },
    onPageChange(value) {
      this.queryData.pageNum = value;
      this.getNews();
    },
  },
};
</script>
<style lang="css" scoped>
.title {
  font-size: 80px;
  font-weight: 500;
  color: #f3f6f5;
  position: relative;
  transform: skewX(-10deg);
  z-index: 1;
}
.title:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewX(10deg);
  background: linear-gradient(#b82116, #b82116);
  z-index: -1;
}
.color-white {
  color: #f3f6f5;
}
.search-field {
  outline: none;
  border-radius: 20px;
  border: 1.5px solid rgb(150, 150, 150);
  padding: 10px;
  color: rgb(104, 104, 104);
}
.search-container {
  width: 100%;
}
.search-form {
  width: 80%;
  margin: auto;
}
.news-pagination {
  margin: auto;
}
.search-bar {
  border-radius: 20px;
  outline: none;
  border: 1.5px solid rgb(150, 150, 150);
  padding: 10px;
  color: rgb(104, 104, 104);
}
.search-bar-wrap {
  position: relative;
}
.search-btn {
  border-radius: 15px;
  outline: none;
  border: 0;
  transform: translateY(-50%);
  color: #8a8888;
  font-weight: 700;
  background: none;
  transition: all 0.3s ease;
}
.search-btn:hover {
  color: rgb(172, 172, 172);
}
.news-container {
  width: 80%;
  margin: auto;
  background: #ffff;
}
@media (max-width: 574px) {
  .news-container {
    width: 100%;
    margin: auto;
  }
  .tilde {
    display: none;
  }
}
</style>
