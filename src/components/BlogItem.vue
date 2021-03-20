<template>
  <div class="blog-item" @click="handleClick">
    <div class="blog-item__image-wrapper">
      <div
        class="blog-item__image-wrapper-figure"
        :style="{ border: '4px solid ' + this.ratingColor[user.type] }"
      >
        <img class="blog-item__image" :src="user.avatar" />
      </div>
    </div>
    <div class="blog-item__content">
      <div class="blog-item__content-start">
        <span class="blog-item__content-title">{{ user.name }}</span>
        <span class="blog-item__content-subtitle"> {{ user.description }}</span>
      </div>
      <div class="blog-item__content-end">
        <span class="blog-item__star"> <Star /></span>
        <span> {{ user.rating }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Star from "../ui/star";
const ratingColor = {
  gold: "gold",
  silver: "silver",
  bronze: "#cd7f32",
  basic: "transparent",
};
export default {
  name: "BlogItem",
  props: ["user"],
  data() {
    return {
      ratingColor,
    };
  },
  methods: {
    handleClick($ev) {
      this.$emit("show-alert", this.user.id, this.user.type);
    },
  },
  components: {
    Star,
  },
};
</script>
<style  lang="scss" scoped>
$mainColor: #2C3E50;

.blog-container {
  display: flex;
  width: 600px;
  margin: 0 auto;
}
.blog-item {
  width: 100%;
  display: flex;
  border: 2px solid #eee;
}
.blog-item__image-wrapper {
  width: 120px;
  height: 120px;
  padding: 15px;
}
.blog-item__image-wrapper-figure {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.blog-item__image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.blog-item__content {
  padding: 20px 40px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  .blog-item__content-start {
    display: flex;
    flex-flow: column;
  }
  .blog-item__content-title {
    font-size: 16px;
    color: $mainColor;
  }
  .blog-item__content-subtitle {
    font-size: 14px;
    color: silver;
  }
  .blog-item__content-end {
    display: flex;
    align-items: start;
  }
  .blog-item__star {
    margin-right: 4px;
    svg {
      width: 18px;
    }
  }
}
</style>