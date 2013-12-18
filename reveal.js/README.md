Ember Beginners Workshop Slides
===============================

The workshop slides are availabe online:

http://slid.es/gregmalcolm/ember-js-workshop/

If you want host a local version of the slides, follow these instructions to get
set up:

Preparation
-----------

Before starting you'll need to install any of the following that you don't already have:

* [Node](http://nodejs.org/) - **Windows Users:** You may need to reboot to get 'npm' to work
* **Grunt** - From your command shell:
  ```
  npm install -g grunt-cli
  ```

Hosting the slideshow
---------------------

From a command shell, go to the Ember Beginner Workshop folder and run this:

```
cd reveal.js
npm install
grunt serve
```

This will serve up reveal.js slides on port 8000. So open this url in a browser
to see them:

```
http://localhost:8000
```
