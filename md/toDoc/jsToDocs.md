<!--
 * @Author: xx1czj 306205161@qq.com
 * @Date: 2024-03-25 12:15:40
 * @LastEditors: xx1czj 306205161@qq.com
 * @LastEditTime: 2024-03-25 12:27:31
 * @FilePath: /ReviewNotes/md/jsToDocs.md
 * @Description: js注释快速生成说明文档
-->
# JsDoc 的注释风格快速生成 Api 文档。

## JsDoc安装
``` bash
npm install -g jsdoc
```
> 在根目录新建 `jsdoc.json` 用于配置生成规则
``` json
{
    "source": {
        // 需要生成文档的对应 js 路径
        "include": ["src/"],
        "includePattern": ".js$"
    },
    "opts": {
        "destination": "docs/", // 文档生成目录
        "readme": "docs/index.md", // 文档首页展示内容
        "template": "", // 文档模板
        "package": "package.json",
        "recurse": true,
        "tutorials": "docs/tutorials", // 生成教程内容
        "encoding": "utf8"
    },
    "templates": {
        // 模板配置，此处跟模板设置有关。
    },
    "plugins": ["plugins/markdown"],
    "markdown": {
        "tags": ["example"],
        "idInHeadings": true
    }
}
```
### GitHub库
- [官方地址](https://github.com/jsdoc/jsdoc)