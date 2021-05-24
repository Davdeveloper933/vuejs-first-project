<template>
  <div class="leave-comment pt-5">
    <div class="container">
      <h4 class="title pb-3 pt-5">leave your comment</h4>
      <div class="d-flex justify-content-center">
        <form class="reply-form row text-center" @submit.prevent="sendEmail">
          <div class="col-6">
            <input type="text" class="w-100" placeholder="Your first name..." name="user_name">
          </div>
          <div class="col-6">
            <input type="email" class="w-100" placeholder="Your e-mail..." name="user_email">
          </div>
          <div class="col-12 mt-3">
            <textarea name="message" class="w-100" placeholder="Message:"></textarea>
          </div>
          <div class="submit-block text-center mt-3">
            <button type="submit" class="title">submit</button>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "LeaveComment",
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
          }, (error) => {
            console.log('FAILED...', error);
          });
    }
  }
}
</script>
