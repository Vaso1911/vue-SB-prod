<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
      <ul class="catalog__list">
        <ProductItem :products="products"/>
    </ul>
</template>

<script>
import products from '../data/products';
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  data() {
    return {
      products,
    };
  },
};
</script>
