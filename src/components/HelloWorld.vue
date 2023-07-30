<template>
  <div class="flex">
        <div
            :class="isOpen ? 'w-20' : 'w-60'"
            class="flex flex-col h-screen p-3 duration-300 bg-dark-purple shadow relative"
        >
              
              <div class="p-2 inline-flex">
                <font-awesome-icon 
                  icon="mug-hot" 
                  class="text-white text-2xl rounded block float-left mr-6"/>
                <h1 :class="isOpen && 'scale-0'" 
                  class="text-white origin-left font-medium text-2xl">KienMall</h1>
              </div>

              <!-- Menu -->
              <!-- <div class="flex items-center rounded-md mt-6 px-4 py-2"
                    :class="isOpen ? 'px-2.5' : 'px-4' "
              > -->
              <ul class="pt-2 mt-6">
                <li class="text-gray-300 text-sm gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                </li>
                <li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                </li>
                <li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                </li>
                <li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                  <font-awesome-icon icon="chevron-right" class="rounded-full absolute r-10 cursor-pointer" />
                </li>
                <li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                </li>
                <li class="text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2" style="display: flex; margin: 0px">
                  <span>
                    <font-awesome-icon class="fs-2" icon="gauge" />
                  </span>
                  <span :class="isOpen && 'hidden'">Dashboard</span>
                </li>
              </ul>

              <!-- </div> -->
              <!-- end menu -->
        </div>
        <!-- Content -->
        <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <!-- Search bar -->
          </div>
          <!-- User login -->
          <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj" alt="">
              <div class="font-semibold dark:text-white text-left">
                <div>Madona ,Dev OP</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
              </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const isOpen = ref(false)
</script>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
