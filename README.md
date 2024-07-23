vue3+ts+setup+pug，可以完美识别出script定义的变量


关键文件

 - package.json，devDependencies新增`pug`,`"eslint-plugin-vue-pug": "^0.6.0"`
 - tsconfig.json, 
 ```
  ...
  ...
 ```

 - eslintrc.cjs
 ```
extends: [
  'plugin:vue-pug/vue3-recommended'
]
 ```

2024年7月24日更新 移除@volar相关工具，使用`@vue/language-plugin-pug`插件，进行变量识别