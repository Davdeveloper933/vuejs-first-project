<template>
  <div class="shopping-cart">
    <Intro>
      <span slot="intro_top">CHOOSE YOUR FAVORITE MOVIES</span>
      <span slot="intro_title">shopping cart</span>
    </Intro>
    <DirectoryLinks></DirectoryLinks>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12">
          <div class="table-responsive">
            {{getShoppingCart}}
            <table class="table table-hover text-left" v-if="getShoppingCart.length">
              <thead>
              <tr class="tr-bg text-white">
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(product,index) in getShoppingCart" :key="index">
                <td><span @click="DELETE_ITEM(index)" class="fa-trash icon"></span></td>
                <td><a href="">{{product.title}}</a></td>
                <td>${{product.price}}</td>
                <td>
                  <form class="quantity">
                    <label class="d-flex align-items-center">
                      <span class="icon fa-angle-left"
                            @click="MINUS(product)"
                      ></span>
                      <span class="item-quantity">{{product.quantity}}</span>
                      <span class="icon fa-angle-right"
                            @click="PLUS(product)"
                      ></span>
                    </label>
                  </form>
                </td>
                <td>${{ (product.price*product.quantity) }}</td>
              </tr>
              </tbody>
            </table>
            <div v-else>Shopping Cart is empty</div>
          </div>
          <div >
            <button @click="CLEAR_CART">Clear Cart</button>
          </div>
        </div>
        <div class="col-4">
          <div class="table-responsive">
            <table class="table table-hover text-left">
              <thead>
              <tr class="tr-bg text-white">
                <th>Cart Totals</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-gray">Total</td>
                <td class="fw-b">${{getTotalValue}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import DirectoryLinks from "@/components/DirectoryLinks";
import {mapActions,mapGetters,mapMutations} from 'vuex'

export default {
name: "ShoppingCart",
  components: { DirectoryLinks, Intro},
  data() {
      return {

      }
  },
  methods:{
    ...mapActions(["getPostsAction"]),
    ...mapMutations(["DELETE_ITEM","CLEAR_CART","PLUS","MINUS"]),

  },
  computed:{
    ...mapGetters(["getShoppingCart","getTotalValue"]),

  },
  created() {

  },
}
</script>

<style scoped lang="scss">

  .shopping-cart {
      table {
        .tr-bg {
          background-color: #d81a24;
        }
        th {
          border-bottom: 1px solid rgba(221, 221, 221, 0.4);
          padding-top: 15px;
          padding-bottom: 15px;
          font-family: "RobotoSlab", serif;
          empty-cells: hide;
        }
        .icon {
          color: #b7b7b7;
          &:before {
            position: relative;
            display: inline-block;
            font-weight: 400;
            font-style: normal;
            speak: none;
            text-transform: none;
            -webkit-font-smoothing: antialiased;
            font-family: "FontAwesome-Solid";
          }
          &.fa-trash {

            &:before {
              content: "\f1f8";
            }
          }
          &.fa-angle-left {
            &:before {
              content: "\f104";
            }
          }
          &.fa-angle-right {
            &:before {
              content: "\f105";
            }
          }
        }
        .quantity {
          input {
            width: 30px;
            vertical-align: middle;
            text-align: center;
            font-weight: 300;
            border: none;
            background-color: transparent;
          }
        }
      }
    .table-responsive {
      border: 1px solid #ddd;
    }
    .item-quantity {
      padding: 1px 15px;
    }
  }

</style>
