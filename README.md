# @halo-dev/api-client

Halo 2.0 的 JavaScript API 客户端请求库。使用 [OpenAPI Generator
](https://openapi-generator.tech/) 生成。

## 开发环境

```bash
pnpm install
```

```bash
# 根据 OpenAPI 3.0 生成类型和网络请求的代码，此步骤需要启动 Halo 2.0 后端。
pnpm gen
```

```bash
pnpm build
```

## 本地调试

```bash
pnpm link --global
```

然后在需要使用的库中执行：

```bash
pnpm link --global @halo-dev/api-client
```

## 发布版本

```bash
pnpm release
```
