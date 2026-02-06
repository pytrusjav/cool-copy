Cool 是一个包含PC前端、移动端和后台的完整系统

### Java 后台框架

#### 代码结构

```
cool-admin-java/
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

```shell
# 修改数据库 posgresql

# 修改缓存 redis

```

- 运行 `mvn spring-boot:run`
- Swagger UI: http://localhost:8001/swagger

### PC前端框架(Vue)

#### 技术栈

- 前端：**`Vue3` `Vite` `Element-Ui` `Typescript`**

### 移动端前端框架(uni-app x)
