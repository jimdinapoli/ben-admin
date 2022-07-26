<template>
  <label :for="uniqueId" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uniqueId"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
  >
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uniqueId}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueIdentifier from '../components/features/UniqueIdentifier'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup () {
      const uniqueId = UniqueIdentifier().getId()
      return {
        uniqueId
      }
    }
}
</script>