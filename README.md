# Vue3 Focus
![Version](https://img.shields.io/npm/v/vue3-focus?color=blue) ![License](https://img.shields.io/npm/l/vue3-focus) ![Downloads](https://img.shields.io/npm/dm/vue3-focus) ![Build Status](https://img.shields.io/github/workflow/status/yuelau/vue3-focus/npm-publish)

Vue3 focus directive
## Examples
```bash
# Install
npm i vue3-focus
```

```html
<!-- Html -->
<input type="text" v-vue3focus="true">
```


```javascript
// Vue3 SCF
import {vue3Focus} from 'vue3-focus'

export default defineComponent({
  directives: {
    'vue3focus': vue3Focus
  },
}
```

```html
<!-- CDN -->
<script src="https://unpkg.com/vue3-focus@latest/lib/vue3-focus.umd.min.js"></script>
```