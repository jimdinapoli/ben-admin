<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :id="uniqueId"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uniqueId}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
  <label :for="uniqueId" v-if="label">{{ label }}</label>
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
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    setup () {
      const uniqueId = UniqueIdentifier().getId()
      return {
        uniqueId
      }
    }
  }
}
</script>