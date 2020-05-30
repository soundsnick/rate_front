<template>
  <div class="notifications">
    <button :class="['notifications-button', isMobile]" @click="isActive = !isActive">
      <font-awesome-icon icon="bell" />
      <span class="notifications-button__title" v-if="isMobile">{{ $t('notifications.title') }}</span>
    </button>
    <div class="notifications-dropdown" v-if="isActive">
      <header class="notifications__header">
        <span class="notifications__title">{{ $t('notifications.title') }}</span>
      </header>
      <div class="notifications-body">
        <Notification :notification="{ text: `Вам оставили отзыв по дисциплине 'SDP-1'`, id: 1}" />
        <Notification :notification="{ text: `Вам оставили отзыв по дисциплине 'SDP-2'`, id: 3}" />
        <Notification :notification="{ text: `Вам оставили отзыв по дисциплине 'SDP-3'`, id: 2}" />
      </div>
      <router-link to="/" class="notifications__more">{{ $t('notifications.more_all') }}</router-link>
    </div>
  </div>
</template>
<style scoped>
  .notifications{
    position: relative;
  }
  .notifications-dropdown{
    position: absolute;
    width: 400px;
    right: 0;
    border: 1px solid var(--border-opaque);
    border-radius: 4px;
    background: var(--grey-bg);
    box-shadow: 0 9px 19px -12px rgba(0, 0, 0, 0.2);
    text-align: left;
    z-index: 9;
  }
  .notifications-button{
    height: 100%;
    padding: 0 15px;
    font-size: 17px;
    background: 0;
    border: 0;
    outline: none;
    cursor: pointer;
    color: var(--primary-hover);
  }
  .notifications-button.true{
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid var(--border-opaque);
  }
  .notifications-button__title{
    margin-left: 15px;
    vertical-align: text-bottom;
  }
  .notifications__header{
    padding: 5px 10px;
  }
  .notifications__more{
    display: block;
    text-align: center;
    padding: 5px;
    font-size: 14px;
  }
  .notifications-body{
    background: #fff;
    border: 1px solid var(--border-opaque);
    border-left: 0;
    border-right: 0;
  }
</style>

<script type="text/javascript">
  import Notification from './Notification.vue'

  export default {
    data(){
      return {
        isActive: false
      }
    },
    props: ['isMobile'],
    components: {
      Notification
    }
  }
</script>
