vue3+ts+setup+pug，可以完美识别出script定义的变量


关键文件

 - package.json，devDependencies新增`pug`,`"@volar/vue-language-plugin-pug": "^1.4.4",`,`"eslint-plugin-vue-pug": "^0.6.0"`
 - tsconfig.json, 
 ```
  ...
  "vueCompilerOptions": {
    "plugins": ["@volar/vue-language-plugin-pug"]
  }
  ...
 ```

 - eslintrc.cjs
 ```
extends: [
  'plugin:vue-pug/vue3-recommended'
]
 ```
