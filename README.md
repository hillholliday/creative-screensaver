# HHCC Creative Screensaver

## Downloading
Visit [Creative Screensaver landing page][1] to signup and download.

1. From here you can click on the download link below the form, this should download a `.zip` directory. 
2. Then you can unarchive the `.zip` **right-click** on the `HHCC Creative.saver` file, and click **open**. 
3. This should open up your Screensaver preferences. Hit install, and select HHCC Creative as your default. 
4. You can preview the screensaver full screen by clicking on the small preview to the right of the screensaver’s list. 


## About
### Non-technical
This little utility was born out of the [Hill Holliday][2] Digital Innovation and Technology (DOIT) team moving to the 35th floor to work more closely with the Creative team. We hope that we can get the creative juices flowing between our two teams even when we're not at our computers by displaying what everyone is working on as our screensavers. 
### Technical
The app is composed of three parts:
1. The custom API built off of [dribbble's][3] own API that pulls in our creative data. 
2. The animation and scaffolding ([React][4] webapp) that rotates through each Dribbble Shot.
3. The screensaver (`.saver`) file that pulls the React webapp through a WebkitView (generated from [@rsms's snarky project][5]).

## Installing and modifying the screensaver
```sh
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```


[1]: http://creative-screensaver.hhcc.tech
[2]: http://hhcc.com
[3]: http://dribbble.com
[4]: https://facebook.github.io/react/
[5]: https://github.com/rsms/WebView-OSX-Screensaver's