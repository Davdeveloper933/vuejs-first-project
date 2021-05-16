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
                <li v-for="item in navMenu" :key="item.title"
                    @mouseover="item.expand = true"
                    @mouseleave="item.expand = false"
                >

                  <a href="" class="nav-link"
                     :class="item.dropdown?'dropdown-arrow':''"

                  >{{ item.title }}</a>
                  <ul class="dropdown-list"
                      v-if="item.title !== 'Pages' && item.dropdown !== null"
                      :class="{expanded:item.expand}"
                  >
                    <li
                        v-for="dropdown_item in item.dropdown"
                        :key="dropdown_item"
                    >
                      <a href="" class="nav-link"

                      >{{dropdown_item}}</a>
                    </li>
                  </ul>
                  <div class="pages-menu d-flex row dropdown-list"
                       v-else-if="item.title === 'Pages' && item.dropdown !== null"
                       :class="{expanded:item.expand}"
                  >
                    <div class="d-flex flex-column col-3"
                         v-for="object in item.dropdown"
                         :key="object.title"
                    >
                      <h2 class="page-menu-title mb-3">{{ object.title}}</h2>
                      <ul class="">
                        <li
                            v-for="list_item in object.pageList"
                            :key="list_item"
                        >
                          <a href="" class="nav-link">{{list_item}}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="search-btn active-toggle"
                   :class="{clicked:clicked}"
              >
                <button class=" "
                        @click="clicked = !clicked"
                ></button>
                <div class="search-inpt-block"
                     :class="{clicked:clicked}"
                >
                  <input type="text" placeholder="Search..">
                </div>
              </div>



              <div class="shopping-cart-icon">
                <span>2</span>
              </div>
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
      expand:false,
      clicked:false,
      navMenu:[
        {
          title:'Home',
          expand:false,
          dropdown:null
        },
        {
          title:'Catalog',
          expand:false,
          dropdown:['Movie Details']
        },
        {
          title:'News',
          expand:false,
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
          expand:false,
          dropdown:[
            {
              title:'Elements',
              pageList:[
                  'Tabs & Accordions',
                  'Typography',
                  'Forms',
                  'Buttons',
                  'Grid',
                  'Icons',
                  'Tables',
                  'Progress bars',
              ]
            },
            {
              title:'Pages 1',
              pageList:[
                  'About Us',
                  'Our Team',
                  'Team member profile',
                  'Contact Us 2',
                  'Pricing',
                  'Services page',
                  'Client Page',
                  'FAQ Page',
              ]
            },
            {
              title:'Pages 2',
              pageList:[
                  '404',
                  'Coming soon',
                  'Login page',
                  'Maintenance page',
                  'Register page',
                  'Search results page',
                  'Terms of Use',
              ]
            },
            {
              title:'Gallery',
              pageList:[
                  'Grid Gallery',
                  'Grid Without Padding Gallery',
                  'Masonry Gallery',
                  'Cobbles Gallery',
              ]
            },
          ]
        },
        {
          title:'Shop',
          expand:false,
          dropdown:[
              'Product catalog',
              'Single Movie',
              'Shopping cart',
              'Checkout'
          ]
        },
        {
          title:'Contact Us',
          expand:false,
          dropdown:null,
        },
      ]
    }
  },
  methods:{
    mouseover(item) {
      item.expand = true;
    },
    mouseleave(item) {
      item.expand = false;
    }
  }
}
</script>