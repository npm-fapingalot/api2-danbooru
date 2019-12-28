# Danbooru API
A API wrapper that reads the HTML of the site and extracts info

This library supports fetching:
- Posts, 
- List of Posts

# Install
``` npm install --save api2-danbooru ```

# API
```
const DanbooruAPI = require('api2-danbooru') 
const api = new DanbooruAPI();
api.post.id(297045).then((post)=> console.log(JSON.stringify(post, null, 2)));
```
