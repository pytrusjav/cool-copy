Cool 是一个包含PC前端、移动端和后台的完整系统

### Java 后台框架

#### 代码结构

```
cool-admin-java/
├── docker-compose.yml
├── Dockerfile
├── pom.xml
├── README.md
├── src/
│   ├── main/
│   │   ├── java/com/cool/
│   │   │   ├── core/      # cool 封装
│   │   │   └── modules/   # 功能模块
│   │   │   └── CoolApplication.java  # 启动类
│   │   └── resources/
│   │       ├── application.yml         # Main configuration
│   │       ├── application-local.yml   # Local environment config
│   │       └── application-prod.yml    # Production environment config
│   └── test/
└── Dockerfile
```

#### 技术栈

- 后端：**`Springboot3` `Mybatis-Flex`**

- 数据库：**`Mysql` `Postgresql` `Sqlite(适配中)` `...`**

#### 项目启动

- 修改配置

修改数据库 posgresql

```yml
spring:
  datasource:
    url: jdbc:postgresql://127.0.0.1:5432/cool
    username: postgres
    password: 123456
    driver-class-name: org.postgresql.Driver
```

修改缓存 redis

```yml
spring:
  cache:
    type: redis
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      database: 0
      password:
```

- 运行 `mvn spring-boot:run`
- Swagger UI: http://localhost:8001/swagger

### PC前端框架(Vue)

#### 项目结构

```
cool-admin-vue/
├── Dockerfile
├── env.d.ts
├── eslint.config.js
├── index.html
├── nginx.conf
├── packages
│   ├── crud
│   └── vite-plugin
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── logo.png
│   └── 用户导入模版.xlsx
├── README.md
├── src
│   ├── App.vue
│   ├── config
│   ├── cool
│   ├── main.ts
│   ├── modules
│   ├── plugins
│   └── shims-vue.d.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

#### 技术栈

- 前端：**`Vue3` `Vite` `Element-Ui` `Typescript` `Tailwind CSS`**

#### 项目启动

```bash
   pnpm install
   pnpm dev
```

应用将在 `http://localhost:9000` 上运行。

### 移动端前端框架(uni-app x)

#### 项目结构

```
cool-admin-unix/
├── App.uvue
├── components
│   ├── locale-set.uvue
│   └── size-set.uvue
├── config
│   ├── dev.ts
│   ├── index.ts
│   ├── prod.ts
│   └── proxy.ts
├── favicon.ico
├── icons
│   ├── iconfont.zip
│   ├── RemixIcon_Collection_2509090754.remixicon
│   └── remixicon.zip
├── index.html
├── LICENSE
├── main.ts
├── manifest.json
├── package.json
├── pages
│   ├── demo
│   ├── index
│   ├── set
│   ├── template
│   └── user
├── pages.json
├── platformConfig.json
├── plugins
│   ├── emitter.ts
│   ├── locale.ts
│   ├── router.ts
│   └── touch.ts
├── README.md
├── static
│   ├── demo
│   ├── empty
│   ├── icon
│   └── logo.png
├── tailwind.config.ts
├── theme.json
├── tsconfig.json
├── uni_modules
│   ├── cool-canvas
│   ├── cool-open-web
│   ├── cool-share
│   ├── cool-svg
│   ├── cool-ui
│   ├── cool-unix
│   └── cool-vibrate
├── uni.scss
├── unpackage
│   └── dist
└── vite.config.ts
```

#### 技术栈

- **`uni-app x`, `Vue 3`, `TypeScript`, `Cool UI`**

#### 项目启动

```bash
    pnpm install
```

修改本地代理

```ts
dev: {
		target: "http://127.0.0.1:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace("/dev", "")
	},
```

- 在hbuilder中打开项目, 启动h5或者原应用

这里有一个细节, 移动端默认是验证码登录, 所以可以提前在缓存中存一个值
![alt text](/image/redis-code.png)
