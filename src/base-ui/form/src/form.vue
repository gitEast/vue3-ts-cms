<!--
 * @Author: your name
 * @Date: 2021-08-11 23:23:14
 * @LastEditTime: 2021-08-19 00:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-cms\src\base-ui\form\src\form.vue
-->
<template>
  <div class="east-form">
    <div class="head">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, computed } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '10px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920 4个
        lg: 8, // 1200 3个
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update: modelValue'],
  setup(props, { emit }) {
    const formData = computed(() => ({ ...props.modelValue }))

    watch(formData, (newValue) => emit('update: modelValue', newValue), {
      deep: true
    })

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.east-form {
  padding-top: 22px;

  .form-item {
    padding: 5px 30px;
  }
}
</style>
