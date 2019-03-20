# glimmer-nativescript-demo

1. Follow the [NativeScript Setup Guides](https://docs.nativescript.org/angular/start/quick-setup#full-setup)
2. Clone Repo
3. `npm install`
4. Run `tns debug ios --bundle --debug-brk`
5. Open inspector (watch terminal for url to paste into chrome)
6. Program will pause in starter.js. Put a break point on line 2 `require("./bundle")`
7. Once it breaks on line 2 you will be able to put a break point anywhere (i.e. you can search for `tracked` and add a breakpoint in `installTrackProperty`)
