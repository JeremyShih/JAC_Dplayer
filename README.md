> ### Don't commit on this repo, please use pull request!

# JAC_Dplayer
> For JAC dev, Modify on **[Dplyer](http://dplayer.js.org/)**

## Build step

1. install `node.js@6.1+` and `npm`.
2. `npm install` to install node packages.
3. `npm run dev` to build .js file and run demo.

## Change.log
08/10 2017
* DPlayer.js
    * Not close setting box after set loop or showdanmaku setting.
    * Screenshot file's name is "jac_dplayer.png".
    * Changed sone SVG icon.
    * Default option.contextmenu change some text.
* DPlayer.css
    * class->(.dplayer .dplayer-danmaku)[bottom] fix to 15%.
        * To prevent danmaku block subtitles.

08/14 2017

- All file
  - Use node.js webpack to build.
- README.md
  - Add build step.