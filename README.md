# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

## flowbite setup with tailwindcss v4

### 로컬에 파일 받아 설치

- 파일 받기

```console
mkdir vendor/assets && mkdir vendor/assets/stylesheets && mkdir vendor/javascript

curl https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css > vendor/assets/stylesheets/flowbite.css

curl https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.turbo.min.js > vendor/javascript/flowbite.turbo.min.js
```

- application.html.erb에 css 설정

```html
<%= stylesheet_link_tag "flowbite", "data-turbo-track": "reload" %>
```

- application.js 에 javascript 설정

```js
import 'flowbite'
```

## ruby on rails vscode 확장 프로그램

### VS Code 필수 확장 프로그램

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "eamodio.gitlens",
    "Shopify.ruby-lsp",
    "rebornix.ruby",
    "aliariff.vscode-erb-beautify"
  ]
}
```

- aliariff.vscode-erb-beautify 설치

```console
bin/bundle add htmlbeautifier
bin/bundle install
```

### VS Code 설정

```json
{
  "tailwindCSS.includeLanguages": {
    "erb": "html",
    "ruby": "html"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[erb]": {
    "editor.defaultFormatter": "aliariff.vscode-erb-beautify",
    "editor.formatOnSave": true
  },
  "vscode-erb-beautify.customEnvVar": {
    "LC_ALL": "ko_KR.UTF-8"
  },
  "ruby.useBundler": true, //run non-lint commands with bundle exec
  "ruby.useLanguageServer": true, // use the internal language server (see below)
  "ruby.lint": {
    "rubocop": {
      "useBundler": true // enable rubocop via bundler
    },
    "reek": {
      "useBundler": true // enable reek via bundler
    }
  },
  "ruby.format": "rubocop", // use rubocop for formatting
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "files.associations": {
    "*.css": "tailwindcss",
    "*.html.erb": "erb"
  }
}
```
