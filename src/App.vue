<template>
  <div>
    <div v-if="curUserIndex != null">
      <Alert
        :ratingColor="ratingColor"
        :user="users[curUserIndex]"
        @hide-alert="hideAlert"
        :userIndex="curUserIndex"
      />
    </div>
    <div class="rating-filter">
      <h5 class="rating-filter__title">Рейтинг пользователей</h5>
      <div class="rating-icon" @click="toggleOrder">
        <Rating />
      </div>
    </div>
    <div class="blog-container">
      <BlogItem
        @show-alert="showAlert"
        v-for="user in users"
        :user="user"
        :key="user.id"
      />
    </div>
  </div>
</template>

<script>
import BlogItem from "./components/BlogItem";
import Star from "./ui/star";
import Rating from "./ui/rating";
import Alert from "./components/Alert";
import { getUsers } from "./api/userApi";
import { ratingColor } from "./helpers";
const orderObj = {
  DESC: (a, b) => {
    return a.rating - b.rating;
  },
  ASC: (a, b) => {
    return b.rating - a.rating;
  },
};
export default {
  name: "App",
  data() {
    return {
      users: [],
      error: null,
      isDesc: true,
      curUserIndex: null,
      loading: false,
      ratingColor,
    };
  },
  watch: {
    isDesc: function (value) {
      let usersCopy = [...this.users];
      this.users = usersCopy.sort(value ? orderObj["ASC"] : orderObj["DESC"]);
    },
  },
  methods: {
    hideAlert() {
      this.curUserIndex = null;
    },
    showAlert(id) {
      // console.log({ id });
      this.curUserIndex = this.users.findIndex((el) => el.id === id);
      console.log(this.curUserIndex);
    },
    toggleOrder(ev) {
      this.isDesc = !this.isDesc;
    },
  },
  created: async function () {
    try {
      this.loading = true;
      let { data } = await getUsers();
      if (!data) {
        this.error = {
          msg: "Не удалось получить пользователей",
        };
      } else {
        this.users = data
          .sort((a, b) => {
            return b.rating - a.rating;
          })
          .map((item, index) => {
            if (index == 0) {
              item.type = "gold";
            } else if (index == 1) {
              item.type = "silver";
            } else if (index == 2) {
              item.type = "bronze";
            } else {
              item.type = "basic";
            }
            return item;
          });
      }
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = {
        msg: "Не удалось получить пользователей",
      };
    }
  },
  components: {
    BlogItem,
    Rating,
    Alert,
  },
};
</script>
<style lang="scss" scoped>
$mainColor: #2C3E50;
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  font-family: "Avenir LT W01 35 Light";
}
.rating-filter {
  display: flex;
  padding-left: 15px;
  justify-content: space-between;
}

.rating-filter__title {
  font-size: 18px;
  color: $mainColor;
}
.rating-icon {
  cursor: pointer;
  margin: 25px;
  width: 35px;
  svg {
    width: 100%;
  }
}
</style>