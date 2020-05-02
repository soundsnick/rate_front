<template>
  <div class="tab-controller">
    <header class="tab-header">
      <nav class="tab-header__nav">
        <button :data-id="tab.id" :class="['tab-header__nav-button', (currentTab === tab.id) ? 'active' : '']" v-for="tab in filteredSlots" @click="switchTab(tab.id)">{{ tab.text }}</button>
      </nav>
    </header>
    <div class="tab-body">
      <slot :name="currentTab">Нет информации</slot>
    </div>

  </div>
</template>
<style scoped>
  .tab-controller{
    margin: 20px 0;
    text-align: left;
  }
  .tab-header__nav-button{
    border: 1px solid var(--border-opaque);
    border-bottom: 0;
    font-family: inherit;
    outline: none;
    background-color: var(--grey-bg);
    padding: 15px 20px;
    font-size: 15px;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .tab-header__nav-button.active{
    background-color: #fff;
    box-shadow: 0 1px 0 #fff;
  }
  .tab-body{
    padding: 20px;
    border: 1px solid var(--border-opaque);
    border-radius: 0 8px 8px 8px;
    box-shadow: var(--wide-shadow);
  }
</style>
<script type="text/javascript">
  export default {
    data(){
      return {
        currentTab: null,
        slots: { departments: true, specialities: true, professors: true, disciplines: true }
      }
    },
    props: ['tabs'],
    methods: {
      isSlot(payload){
        return (this.slots[payload] !== null)
      },
      switchTab(payload){
        if(this.isSlot(payload)){
          this.currentTab = payload
        }
      }
    },
    computed: {
      filteredSlots(){
        let filtered = this.tabs.filter(tab => this.isSlot(tab.id))
        this.switchTab(filtered[0].id)
        return filtered
      }
    }
  }
</script>
