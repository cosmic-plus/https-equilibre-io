# equilibre.io

- Website: https://equilibre.io
- Sources: https://github.com/cosmic-plus/webapp-equilibre-io
- Build: https://github.com/cosmic-plus/https-equilibre-io

The webapp is served directly from the GitHub repository using CloudFlare. More
precisely, what is served is the HEAD of the master branch of the build
repository.

You can run this webapp locally, or serve your own fork on the web.

## Integrity check

This web application has a unique property: anybody can check that the website
served at `https://equilibre.io` is indeed built from the last sources. It
requires **git**, **npm** and **sh**:

```sh
git clone https://github.com/cosmic-plus/webapp-equilibre-io
cd webapp-equilibre-io
npm run check
```

The last command will replay the building process and compare the result with
what is currently served on the web. If any file differs, it will tell about
them and you'll know that what is served is not what it is supposed to be. If
nothing differs, then the integrity check does pass and you'll see the following
message:

> nothing to commit, working directory clean

## Run a fork of this application

You can run this website locally, or run your own fork on the web quite easily.

### Run it locally 1 (download)

You can get an archive of the website at:

> https://github.com/cosmic-plus/https-equilibre-io/archive/master.zip

Some browsers will accept to run `index.html` directly (like Firefox), some
other won't (like Chrome).

### Run it locally 2 (git, npm & live-server)

If you have git and npm, you can serve the website locally:

```sh
git clone https://github.com/cosmic-plus/https-equilibre-io
cd https-equilibre-io
npm install --global live-server
live-server
```

The website should be available at http://127.0.0.1:8080.

### Serve it on the web

You can serve your own clone of the website on Github simply by forking the
`https://github.com/cosmic-plus/https-equilibre-io` repository. Then
go to the repository settings and under `GitHub Pages` select `Master` as
Source. Your clone will be available at:

> https://{username}.github.io/{repository}

You can serve it over your own by tweaking the `CNAME` file and [making your
domain point to
GitHub](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

Your fork will get its own storage space in users browser: private keys are
properly compartmented.

### Tweak it

If you only want to change the way the website display, you can edit `main.css`
in the build repository. If you want to play with the JavaScript sources, you
need to get them beforehand:

```sh
git clone https://github.com/cosmic-plus/webapp-equilibre-io
cd webapp-equilibre-io
npm install
npm run get
npm run serve
```

The changes made to the files into the `src/` directory will get pushed to the
local website automatically.

Remember that the source repository contains the build repository as a submodule
at `web/`. All you'll have to do to publish your modified version of the website
is to push this submodule to your own GitHub repository.

### Build it

To pack the production version:

```sh
npm run lint
npm run build
```

### Check build integrity

After building and committing the last version of your changes, run:

```sh
npm run check
```

The git status should show no modified files.
