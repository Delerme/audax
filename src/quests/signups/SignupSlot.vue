<template>
  <input type="text" class="slot"
    v-model.trim="input"
    :placeholder="placeholder"
    :disabled="!isEnabled"
    @keyup.enter="handleSignup">
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component ({
  props: ['email','index']
})
export default class SignupSlot extends Vue {
  email: string
  index: number
  input: string
  placeholder: string
  isEnabled: boolean

  created() {
    this.placeholder = ">______________________________________";
    this.input = this.email;
    this.isEnabled = this.input === "";
  }

  handleSignup() {
    this.$el.blur();
    if (this.isValidYextEmail()) {
      this.$emit('requestSlot', this.input, this.index);
      this.isEnabled = false;
    } else {
      this.input = "";
      this.placeholder = "Signup with a Yext Email";
      this.$el.focus();
    }
  }

  isValidYextEmail() {
    // do some validation
    return true;
  }
}
</script>

<style>
input.slot {
  margin: .1em;
  width: 100%;
  font-size: 1.25em;
  background: none;
  border: none;
}
</style>
