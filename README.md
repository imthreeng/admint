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
import "flowbite";
```
