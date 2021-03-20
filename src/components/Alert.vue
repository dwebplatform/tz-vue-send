<template>
  <div class="alert">
    <div class="alert__content">
      <div class="alert__title">
        <h4 class="alert__title-content">Профиль пользователя</h4>
        <span @click="handleClose" class="alert__close-btn">&times;</span>
      </div>
      <div class="alert__body">
        <div class="alert__body-image-and-about">
          <div
            class="alert__body-image-wrapper"
            :style="{ border: '4px solid ' + ratingColor[user.type] }"
          >
            <img class="alert__body-image" :src="user.avatar" />
          </div>
          <div class="alert__body-about">
            <h5 class="alert__body-about-title">О себе:</h5>
            <p class="alert__body-about-text">{{ user.description }}</p>
          </div>
        </div>
        <div class="alert__body-content">
          <h5>Имя:</h5>
          <p>{{ user.name }}</p>
          <h5>Баллы:</h5>
          <p>{{ user.rating }}</p>
          <h5>Позиция в рейтинге:</h5>
          <p>{{ userIndex + 1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["user", "userIndex", "ratingColor"],
  methods: {
    handleClose() {
      this.$emit("hide-alert");
    },

    // hide-alert
  },
};
</script>
<style  lang="scss" scoped>
$mainColor: #2C3E50;

.alert {
  width: 100vw;
  height: 100vh;
  color: $mainColor;
  z-index: 10;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  display: flex;
  /* opacity: 0.3; */
  justify-content: center;
  align-items: center;
}
.alert__body-image-and-about {
  flex-basis: 20%;
}
.alert__title {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-family: "Avenir LT W01 35 Light";
}
.alert__content {
  font-family: "Avenir LT W01 35 Light";
  padding-left: 16px;
  margin: 0 auto;
  width: 360px;
  font-weight: 700;
  background: #fff;
}

.alert__close-btn {
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
}
.alert__body-image-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.alert__body {
  width: 100%;
  display: flex;
}
.alert__body-about-title {
  padding-left: 5px;

  margin-bottom: 0;
  font-family: "Avenir LT W01 35 Light";
  font-size: 18px;
}
.alert__body-about-text {
  padding-left: 5px;
  margin-top: 0;
  font-size: 16px;
}
.alert__body-content {
  display: flex;
  flex-flow: column;
  & > * {
    padding: 0;
    margin: 0;
    margin-left: 15px;
  }
}
</style>