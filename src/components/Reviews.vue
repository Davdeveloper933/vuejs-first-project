<template>
  <div class="reviews-block">
    <div class="container">
      <TitleTemplate>
      REVIEWS
    </TitleTemplate>
      <div>
        <div class="comment-item d-flex justify-content-center">
          <div class="comment-avatar">
            <img src="@/assets/images/index-13.jpg" alt="">
          </div>
          <div class="comment-body">
            <h2 class="user-name">
               <a href="">Jack Wilson</a>
            </h2>
            <div class="post-time">
              <span>April 24, 2018 at 10:46 am</span>
            </div>
            <p class="comment-text my-2">
              Quam pellentesque nec nam aliquam. Ornare lectus sit amet est placerat. At lectus urna duis convallis convallis tellus.
            </p>
            <a href="" class="reply-icon">
            </a>
          </div>
        </div>
        <div class="comment-item replied d-flex justify-content-center">
          <div class="comment-avatar">
            <img src="@/assets/images/index-12.jpg" alt="">
          </div>
          <div class="comment-body">
            <h2 class="user-name">
              <a href="">Sharon Willis</a>
            </h2>
            <div class="post-time d-flex align-items-center">
              <span>April 24, 2018 at 10:46 am</span>
              <a href="" class="reply-icon">
                Jack Wilson
              </a>
            </div>
            <p class="comment-text my-2">
              Eu mi bibendum neque egestas. Risus quis varius quam quisque id diam vel. Vulputate odio ut enim blandit volutpat<br> maecenas volutpat blandit aliquam.            </p>
            <a href="" class="reply-icon">
            </a>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import TitleTemplate from "@/components/TitleTemplate";
export default {
name: "Reviews",
  components: {TitleTemplate}
}
</script>