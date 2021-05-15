<template>
  <header>
<!--    https://www.templatemonsterpreview.com/demo/49053.html?_gl=1*ulsl28*_ga*MTk5NzU3ODk2LjE2MjA5ODI0MDA.*_ga_FTPYEGT5LY*MTYyMDk5NzM0Mi4zLjEuMTYyMDk5NzY2My42MA..&_ga=2.20199294.713940687.1620982400-199757896.1620982400-->
      <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <a href="" class="logo">
              <img src="@/assets/images/logo.png" alt="">
            </a>
            <div class="header-navigation d-flex align-items-center">
              <ul class="header-navbar d-flex justify-content-between align-items-center">
                <li v-for="item in navMenu" :key="item.title">
                  <a href="" class="nav-link"
                     :class="item.dropdown?'dropdown-arrow':''"
                  >{{ item.title }}</a>
                  <ul v-if="item.dropdown">
                    <li
                        v-for="dropdown_item in item.dropdown"
                        :key="dropdown_item"
                    >
                      <a href="">{{dropdown_item}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button class="search-btn"></button>
              <div class="shopping-cart-icon"></div>
            </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

      navMenu:[
        {
          title:'Home',
          dropdown:null
        },
        {
          title:'Catalog',
          dropdown:['Movie Details']
        },
        {
          title:'News',
          dropdown:[
              'Default Blog',
              '2 Columns Blog',
              '3 Columns Blog',
              'Blog Archive',
              'Timeline',
              'Post page',
              'Blog with Left Sidebar',
              'Blog with Right Sidebar',
              'Blog without Sidebar',
          ]
        },
        {
          title:'Pages',
          dropdown:null
        },
        {
          title:'Shop',
          dropdown:null
        },
      ]
    }
  }
}
</script>