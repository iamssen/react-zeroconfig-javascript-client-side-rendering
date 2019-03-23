# Start development

```bash
npm start
```

# Build and git publish

```bash
npm run build
npm run git.publish
```

# NginX configuration

```
server {
  set $STATIC_FILES {your-project-root}/dist/web;

  listen       9201;
  server_name  localhost;

  location / {
    root $STATIC_FILES;
    try_files $uri /index.html;
  }
}
```

> If you can't use the rewrite rule, change the `<BrowserRouter>` in `src/_app/app.jsx` to `<HashRouter>`  

# Build module and publish

- [English guide](https://github.com/iamssen/react-zeroconfig/blob/master/docs/Module/en.md)
- [한국어 가이드](https://github.com/iamssen/react-zeroconfig/blob/master/docs/Module/ko.md)

```bash
npm run build
npm run module.publish
```