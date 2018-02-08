<template>
  <input type="email" class="slot"
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
    this.placeholder = '>______________________________________';
    this.input = this.email === '' ? '' : this.email.replace('@yext.com','');
    this.isEnabled = this.input === '';
  }

  handleSignup() {
    this.$el.blur();
    if (this.isValidYextEmail()) {
      this.$emit('requestSlot', this.input, this.index);
      this.isEnabled = false;
    } else {
      this.input = '';
      this.placeholder = 'Signup with a Yext Email';
      this.$el.focus();
    }
  }

  isValidYextEmail() {
    return this.input.endsWith('@yext.com');
  }
}
</script>

<style>
input.slot {
  margin: .1em;
  width: 100%;
  font-family: 'Tangerine', cursive;
  font-size: 1.8em;
  background: none;
  border: none;
}
</style>
