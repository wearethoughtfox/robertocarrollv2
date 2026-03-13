---
author: roberto
comments: false
date: 2015-05-01 16:34:33
layout: post
slug: code-snippets
title: 'Useful code snippets'
categories:
- Journal
tags:
- javascript
---

<div class="message">I'm going to use this post to keep all the useful things about Git in particular but other things as well.</div>

## Add new remote repository

`git remote add origin <remote repository URL>`

## Create a new branch to work in
`git checkout -b <branchname>`

## Merge branch back in
* `git checkout master`
* `git pull origin master`
* `git merge <branchname> --no-ff`
* `git push origin master`

## Update gh-pages with master
* `git checkout gh-pages`
* `git merge master`
* `git push origin gh-pages`

## Create Github page branch
* `git checkout -b gh-pages`
* `git commit -m "First commit to gh-pages branch"`
* `git push origin gh-pages`

## Discard unstaged changes
* `git clean -df`
* `git checkout -- .`

## Remove files from the repository based on your .gitignore without deleting them from the local file system
`git rm --cached 'git ls-files -i -X .gitignore'`

## Remove file/folder from Git repository without deleting it from the local filesystem
* `git rm --cached mylogfile.log`
* `git rm --cached -r mydirectory`
* `git rm --cached -r platforms`
* `git rm -r --cached some-directory`

## Remove node_modules
* add 'node_modules' to .gitignore file
* `git rm -r --cached node_modules`
* `git commit -m 'Remove the now ignored directory node_modules'`
* `git push origin master`

## Roll back to previous commit
`git revert --no-commit 544993f8416a6e8a0cde66f7ea28379f9ebf446c .HEAD`

This will revert everything from the HEAD back to the commit hash. (The --no-commit flag lets git revert all the commits at once, instead of littering history with messages for each commit in the range.)

to discard all the changes, and get a clean working tree:
* `git reset --hard HEAD`
* `git revert --continue`

## See history of commits
`git log`

## See remote branches
`git remote show origin`

## Update gh-pages branch with master
`git push origin master:gh-pages`

## New gh-pages branch and publish
* `git checkout -b gh-pages`
* `git push origin gh-pages`

## Keep gh-pages up to date with a master branch
* `git add .`
* `git status` // to see what changes are going to be commited
* `git commit -m` 'Some descriptive commit message'
* `git push origin master`
* `git checkout gh-pages` // go to the gh-pages branch
* `git rebase master` // bring gh-pages up to date with master
* `git push origin gh-pages` // commit the changes
* `git checkout master` // return to the master branch

## Kill processes
* `$ top`
* `$ kill -9 PID, e.g. $ kill -9 93799`

## Start a webserver - cd into directory and:
* `python -m SimpleHTTPServer 8888 &` // Go to http://localhost:8888/
* `python3 -m http.server` // For Python 3:

## Open bash profile in textedit
1. `touch ~/.bash_profile; open ~/.bash_profile`
2. `source ~/.bash_profile`

## See what’s on the path
`echo $PATH`

## Copy gem sets
rvm allows you to have many different installations of ruby. You can copy gem sets across

* `rvm gem set copy old new`
* `rvm gem set copy 2.0.0-p353 2.1.3`

## Ruby versions and sudo
* `rvm list`
* `rvm use RUBY-VERSION`
* `rvm gemset list`
* `gem install GEM --no-document`

## Homebrew
* `brew info <package>`
* `brew switch node 0.12.7_1`
* `brew switch node 4.1.1`

## Homebrew housekeeping
* `brew autoremove` - Removes formula only installed as a dependency of another formula and are now no longer needed.
* `brew cleanup` - Removes downloads for outdated formulas and casks.

## Homebrew updating
* `brew upgrade` - Get the latest versions of packages.
* `brew upgrade FORUMLA` - Get the latest versions of a specific packages.

## Homebrew permissions
* `sudo chown -R $(whoami) /usr/local`

## Python versions using pyenv
[Reference](http://jespertoftkristensen.com/JTK/Blog/Entries/2014/10/27_Full_control_of_your_Python_and_Development_Environment.html)

* `pyenv install 2.7.7`
* `pyenv versions`
* `pyenv global 2.7.7`
* `pyenv local 3.4.0`
* `pyenv virtualenvs`
* `pyenv virtualenv 2.7.7 my_project`
* `pyenv activate my_project`
* `pyenv deactivate`
* `pyenv shell Cellar` - sets to Homebrew Python
*  Use `pyenv shell system` when installing something relating to python via brew

## Python checks
* `python-config --prefix`
* `which python`
* `pyenv which python`
* `brew --prefix`
* `echo $PYTHONPATH`

## Python and Homebrew
* Only brew install while pyenv global is set to system and never brew while in a virtual environment. `pyenv global system` [Reference](http://amaral-lab.org/blog/troubleshooting-pyenv)
* To fix brew doctor issue try `echo 'alias brew="env PATH=${PATH//$(pyenv root)\/shims:/} brew"' >> .bash_profile` or `echo 'alias brew="env PATH=${PATH/\/Users\/roberto\/\.pyenv\/shims:/} brew"' >> .bash_profile`

## Use pyenv and virtualenv
Virtualenv lets you create isolated Python environments where you can pin down versions of site-packages specific to a particular project.
$ pip install virtualenv
$ pyenv install 2.7.2
$ pyenv shell 2.7.2
$ virtualenv `which python` foo
$ source foo/bin/activate
$ pip install pandas
$ pip install numpy

## Get rid of new mail (bouncebacks) in Terminal
* `mail`
* `delete 1-` where 1- is the number of message, ie message 1 or 2 etc
* `q`

## List globally installed NPM packages and version
* “global installs are for command-line applications. Local installs are for things you require().”
* `npm list -g --depth=0`
* On [npm and homebrew](https://gist.github.com/DanHerbert/9520689)

## nvm and node
* Note: As of 2016 I am using https://github.com/tj/n for Node version stuff.
* `nvm alias default node` set alias to node itself to avoid updating the default alias along with node version updates later on.
* `nvm alias default` version, eg `nvm alias default 0.12.7` sets the default node version in your shell. Then verify that the change persists by closing the shell window, opening a new one, then: node --version.
* If you want to update to latest stable version (lts - recommended for most users), then you should run: nvm install lts/* --reinstall-packages-from=node. After that you can cleanup your versions with nvm uninstall [old version]. You can list all installed versions with nvm ls

## Smart quotes
* `Single opening - alt + ]`
* `Single closing & apostrophe - alt + shift + ]`
* `Double opening - alt + [`
* `Double closing - alt + shift + [`
* See [Smart Quotes](http://smartquotesforsmartpeople.com/) for details.

## Merging topojson
When combining two or more files, you can specify the properties to keep:
* `topojson -o select.json -p sov0name,name -- subunits.json places.json`

## Batch crop using Imagemagick
Quick batch crop:
* `mogrify -crop x_sizexy_size+x_offset+y_offset inputfile outputfile`
Make a new folder called ‘cropped’ to keep the cropped images in.
* `mogrify -crop 300x300+150+150 -path ./cropped *.jpg`

## Resize using Imagemagick
* `mogrify -resize 640x427 -path ./cropped *.jpg`

## Convert to gif using Imagemagick
* `convert -delay 100 -loop 0 input*.jpg animation.gif`

## Regex to replace content between two characters
* `(?s)START(.*?)END’ as in ’(?s)<table(.*?)</table>`

## Regex to replace content between two characters
* First `brew install rename`
* Then for dry run `rename -n 'y/A-Z/a-z/ | s/\s+//g' *.jpg`
* And remove -n to do it: `rename 'y/A-Z/a-z/ | s/\s+//g' *.jpg`
* First one is lowercase and second is white space linked together by pipe (|) and this will do all jpgs in a folder.
* Note Macs are not case sensitive with filenames so just doing the lowercase won't work on its own.

## Regex to turn change case on text between two characters
* Using Sublime Text - Make sure case sensitivity is on (Alt + C) and preserve case is off (Alt + A).
* `"name": "([a-zA-Z0-9_ ]*+)"`
* The brackets create capture group. You can create more than one capture group. You reference it using $n, where n is the number of the capture group.
* `"name": "\U$1"` so $1 gets everything between the brackets
* \u capitalises words and \l uncapitalises words. There's loads more options
* This is quite a good article: https://codepen.io/jakealbaugh/post/regex-in-sublime-text

## Print a list of filenames from a folder
* `ls ./ > output.txt`

## PDF to text
* `pdftotext -layout -enc UTF-8 inputfilename.pdf outputfilename.md`

## Keyboard shortcuts
* On a Mac: System Prefs > Keyboard > Text is where you can create shortcuts for oft-used words and phrases
* System Prefs > Keyboard > Shortcuts

## Importing photos from iPhone to computer
- Use either Image Capture or Preview
- Select all, move to a folder, then delete from device.
- Don't use Photos or any other Apple thing because it stores them in a crazy format.

## File path locations
- `/` = root of the current drive;
- `./` = current directory;
- `../` = parent of the current directory.

## Fix for blocked camera in Skype
- Close Skype
- Terminal: `sudo killall VDCAssistant`
- See [here for details](http://fusion94.org/blog/2015/10/23/camera-fix-for-el-capitan/)

## Kill Jekyll
- Jekyll serve went crazy and create huge files
- Kill it with `pkill -f jekyll`

## Activate emoji keyboard
- Mac OS: control-command-space activates emoji keyboard

## Export Github issues to CSV
- Open the following URL in a browser substituting the &#123;owner&#125; and &#123;repo&#125; with real values:
`https://api.github.com/repos/OWNER/REPO/issues?page=1&per_page=100`

## Eject disk popup gets stuck
- Terminal:
`killall UnmountAssistantAgent`

## Rename a Github branch
`git branch -m new_name`

## Bootstrap media queries
* screen-sm-max = screen-md-min - 1 = 992 - 1 = 991
* screen-xs-max is 767px
* screen-xs-max = screen-sm-min - 1 = 768 - 1 = 767

## Optimise images with
`convert puzzle.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB puzzle_converted.jpg`

## Mac shortcuts
- `CMD + Shift + right arrow` - select to end of the line
- `Double click` - select the entire word

## Delete shapefile in QGIS
- right click the layer
- choose “Toggle Editing”
- in the toolbar select the pointer with the area “Select Features …”
- click on Antartica
- press delete on the keyboard

## Find IP
- Open Terminal
- `ping url`

## pyenv and homebrew
- https://amaral.northwestern.edu/blog/troubleshooting-pyenv
- Only brew install while pyenv global is set to system and never brew while in a virtual environment.
- `$ brew uninstall that_thing_you_installed_wrong`
- `$ pyenv global system`
- `$ brew install that_thing_you_installed_wrong`

## Rename files in a folder
- brew install ren
- ren '*.txt' '#1.md'

## Download YouTube video as audio
`$ youtube-dl --audio-format 'best' "URL"`
`$ youtube-dl --audio-format 'm4a' URL`

## Convert webm to mp4
`ffmpeg -i FILENAME.webm FILENAME.mp4`

## Extract the audio from an .WEBM movie file to an .MP3 audio file
`FILE="the-file-you-want-to-process.webm";
ffmpeg -i "${FILE}" -vn -ab 128k -ar 44100 -y "${FILE%.webm}.mp3";`

## Batch process all WEBM video files in a folder
`for FILE in *.webm; do
    echo -e "Processing video '\e[32m$FILE\e[0m'";
    ffmpeg -i "${FILE}" -vn -ab 128k -ar 44100 -y "${FILE%.webm}.mp3";
done;`

## Batch process all MKV video files in a folder
`for FILE in *.mkv; do
    echo -e "Processing video '\e[32m$FILE\e[0m'";
    ffmpeg -i "${FILE}" -vn -ab 128k -ar 44100 -y "${FILE%.webm}.mp3";
done;`

## Batch process all mp4 video files in a folder
`for i in *.mp4; do ffmpeg -i "$i" "${i%.*}.mp3"; done`

## Add to things
The email’s subject becomes your to-do’s title, and the rest goes into the notes.

## MySQL
- To start the MySQL server, use the `mysql.server` tool: $ mysql.server start
- To stop it when you are done, run: $ mysql.server stop
- You can see the different commands available for `mysql.server` with: $ mysql.server --help
- To connect with the command-line client, run: $ mysql -uroot
(Use `exit` to quit the MySQL shell.)

**Note**: By default, the MySQL user `root` has no password. It doesn't really matter for a local development database. If you wish to change it though, you can use `$ mysqladmin -u root password 'new-password'`.

## To start mongodb on Catalina
`mongod --config /usr/local/etc/mongod.conf`

## Incorporate a separate repo into your repo
"There isn't anything to compare. Nothing to compare, branches are entirely different commit histories"
Starting from master:
- `git branch new_branch`
- `git checkout new_branch`

## Free up space on Mac
- About my Mac > Storage > Manage 

## Capture video stream in VLC
- File > Open network
- Paste video url
- Settings 
	- File > browse > “where to save file” 
	- encapsulation method > MPEG 4
	- Open   

## Merge a folder of text files into a single file
cat *.txt >> ~/Desktop/combined.txt

## Force log in page on hotel wi-fi
- clear custom DNS 
- incognito browser 
- captive.apple.com

## Uninstall npm
curl -qL https://www.npmjs.com/install.sh | sudo sh

## Changing file extensions for all files in a directory
- Could `brew install ren` and then `ren 'prefix_*.txt' 'prefix_#1.md'`
- Or use Finder 
- Select all the files, right-click and select "rename..." 
- Add the existing file extension in "Find" and the extension you want to replace with "Replace with". 

## VS Code tips
— Select all occurrences of find match
- Mac: `cmd+shift+L`

## Clean up Node Modules 
Limit to project folders 
- `npx npkill --sort size`
- `npx npkill`
- `npm cache verify`

## Merge CSVs in a folder 
`awk 'FNR==1 && NR!=1{next;}{print}' *.csv > merged.csv`

## Homebrew save disk space  
` brew cleanup --prune=all`