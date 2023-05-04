<template>
  <div class="modal" v-if="this.showfetchStore.modalStatus">


    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img v-if="this.showfetchStore.modalvelue.image" :src="this.showfetchStore.modalvelue.image.medium">
      <img v-else
        src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">

    </div>

  </div>
</template>
<script>
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';


export default {
  computed: {
    ...mapStores(useShowFetchStore)
  },
  methods: {
    closeModal() {
      this.showfetchStore.modalStatus = false
      document.body.style.overflow = 'auto'
    },
  },
  watch: {
    '$route.query.name': {
      handler: function () {
        this.showfetchStore.modalStatus = false
        document.body.style.overflow = 'auto'
      },
      deep: true,
      immediate: true
    }
  }

}

</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
 


}

.modal-content {

  width: 35%;
  height: 98%;
  position: relative;
  border: 2px solid gray;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

}

.close {
  position: absolute;
  font-size: 45px;
  top: 0;
  left: 0;
  cursor: pointer;
  font-weight: 900;
  background-color: red;
  line-height: 40px;
  width: 40px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  &:active{
    opacity: 50%;
  }
}

</style>


