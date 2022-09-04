---
aliases: 
tags: macos, apple
title: 'This is How I Would Have Used My Mac, if I Had one..'
---

# This is How I Would Have Used My Mac, if I Had one..

# I Got My Hands on a Macbook

The new M1 Macbooks are wonderfull computing beasts and got me really intrigued. That prompted me to borrow a Mac book from a friend to use it over a weekend. Because, I had to convince myself beyond any doubts that its the right machine for me before I spend approx. half my annual income on it.

During that weekend I used the machine for more than 30 hours. I only had only 8 hours of sleep over that weekend. I researched a lot about the Mac-OS and found some neat little tricks and some amazing apps. I used it for more than 30 hours over that weekend. Though its predominantly to address my use-case, thought some of you might also find thing or two that you can use.

Below, I am sharing how I did that. Majority of the Apps that I highlight below are free. I have explicitly marked the Paid Apps.

## Why Should You Customize Software?

All good software are designed and developed having their ideal user in mind. The developper makes their best effort to make the software enjoyable, functional and usable by majority of its userbase.

In that scenario if you take any software that is used by a generic user-base (Eg. operating systems such as Mac OS, Windows, Android and software suites such as Microsoft office), the software is designed to make it usable by its most basic user, in its default configuration. At the same time they try to make it appealing to a wide cross section by enabling them to customize it to their use-case. Therefore, if you are using any software in it's default configuration, it's most likely that you're compromising the functionality and your productivity by downgrading your aptness to a basic user.

I believe that I have convinced you that all software that you use needs some form of customization to get the maximum use for your specific use-case. If I share my personal experience, I almost always customize everything that I use to my use-case in best possible way. (A word of caution, if you do it too much you can break things too, and I do that very frequently). I've written a few articles on different ways that I've customized my workflows.

1. How I have developed my own macros for Microsoft office, to improve my productivity.
2. How I have developed my own key-map, to use the computer keyboard with maximum productivity.
3. How I have customized my workflow in Linux to best suite my needs.

## Base Installation

As any IT person would do, I didn't want to affect any of my friends setup. So I created new user for myself.

- First I installed [Homebrew](https://brew.sh/), which is a terminal based package manager for Mac. With this you can install almost all the applications that I am going to talk about with a single command. `homebrew install <app name>`. However, if you don't like to use the terminal, you can install all of the applications using the standard method, by copying the .dmg file to the applications directory.

## Key-map

- My first task was to replicate Capsy for Mac. Capsy is the key-map I developped to improve the productivity of my keyboard use in Windows. You can read more about Capsy and how and why I created my own keymap hereww. I could easily achieve this with a software called [Karabiner Elements](https://karabiner-elements.pqrs.org). This software provides an easier way to customize using a Graphical User Interface. You can either create your own keymmap or download popular keymaps from the karibiner elements website. For instance anyone would want to put the CapsLock key to good use by mapping it to either Escape or Control key. In case if anyone is interested, I've shared my config file where I implemented Capsy implementation hereww.

## Terminal

Next task was customizing the terminal, as I used the terminal for most tasks. You can skip this section, if you are not planning to use the terminal. My objective was to replicate my linux terminal environment in Mac. In apple zsh is the default shell. I installed [iterm2](https://iterm2.com/) which is a terminal with better customization.

- Installed [iterm2](https://iterm2.com/)
- Changed the key mappings via `Preferences > profile > keys > keymapping > presets > natural keys`
- Installed [ohmyzsh](https://ohmyz.sh) (ohmyzsh adds functionality to zsh)
- installed Tmux (Tmux is a terminal multiplexer) and copied my tmux config files [.tmux.conf](https://github.com/wayanlw/dotfiles/blob/master/.tmux.conf) to the home folder.
- installed Vim (Vim is a modal text editor), install [vimplug](https://github.com/junegunn/vim-plug) and copy the [.vimrc](https://github.com/wayanlw/dotfiles/blob/master/.vimrc)

## Getting the Basics Right

- Browser: Next a browser. Installed [brave](http://brave.com) browser and configure it for maximum privacy. You can read more about why you should use a privacy respecting browser and the benefits of it in my previous article hereww.
- Text Editor/IDE: I needed a good text editor with basic IDE functionality to edit my configs. I installed [vscode](https://code.visualstudio.com/).
- Launcher: Mac is already far ahead of Windows in this department. You have spotlight. However, [Alfred](https://www.alfredapp.com/) (PAID) is a better alternative. With its PowerPack it provides a significant efficiency boost. Another software that I would happily pay for, if I ever buy a mac. [Space launcher](https://spacelauncherapp.com/) is an alternative launcher where you can launch apps with the Spacebar. However, since I implemented this with my Karabiner config, it was not necessary for me. But some of you might find it interesting.
- Task Switcher: I didn't like the way how MacOS displays the opened apps in the task switcher. It displayed the open apps instead of open windows. For instance, if Excel has multiple files open, you will first have to switch to Excel app with `COMMAND+TAB` and then use `COMMAND+tilda` to switch to the correct windows. I installed [alt-tab](https://alt-tab-macos.netlify.app/). This provides windows-like alt-tab functionality. ie. If there are different windows of the same app, it shows them separately. Within this app I changed the view mode to windows 10 and remapped the keyboard shortcut to `COMMAND+tab` and `COMMAND + ``
- Shortcuts: Since I was using MacOS after many years, I couldnt clearly remember some keyboard shortcuts. As you would have realized by now, I live in the keyboard. I prefer using keyboard for everything, instead of the mouse. I installed [cheatsheet](https://www.mediaatelier.com/CheatSheet/). This enables the user to view and access all keyboard shortcuts for an app by holding the `COMMAND` key.
- Clipboard Manager: Clipboard manager is an essential component of my workflow. Clipboard managers keep a history of things that you copied before so that you can paste something you copied prior to the last one. I installed [Maccy](https://github.com/p0deje/Maccy). This is a clipboard manager with history. I enable automatic pasting so that I can directly paste them to the active windows instead of copying the selection to the clipboard and then pasting again.
- Password manager: I don't reuse the same password and no one should. For this I installed [keepassxc](https://keepassxc.org/download/#mac). And in the browser I anyways have xxxBitwardexxx as a backup.
- PDF Reader: I wanted a PDF reader. I Installed xxxSkimxxx. This provides some additional functionaity such as easier annotations etc.

## Window Management

- One of the key issues that slows me down in an OS is Window Management. If I am to use the mouse to move or resize every window, it will significantly slow me down. I want to use keyboard shortcuts or touchpad gestures for that.
- To manage the application windows with the keyboard I found [rectangle](https://rectangleapp.com/). There is a popular paid alternative call xxmagnetxx. But I couldn't find anything that magnet offers more than rectangle.
- To manage application windows with touchpad gestures I installed [swish](https://highlyopinionated.co/swish/). This is a paid app. But if I ever purchase a Mac, this would be one of the first few that I will purchase. This gave me an immediate efficiency boost.
- I also checkedout some tiling window managers. But they are not as optimized as the mainstream linux tiling window manager such as i3, dwm, bspwm etc. The ones that I used were

## App Management:

- Since I will be install and removing many apps to identify the best app, I wanted something that can cleanly remove installed apps. Because most apps tend to leave some configuration files behind. For this I Install [appcleaner](https://freemacsoft.net/appcleaner/). This deletes the leftovers when I remove an app. xxxClean my Macxxxx is a paid alternative for this with added functionality.
- I also installed [clean-me](https://github.com/Kevin-De-Koninck/Clean-Me). This cleans the caches etc. which are temp files. At onetime this cleaned about 2GB of temp files.
- I wanted a way to keep the installed Apps up-to-date. With homebrew this was just one command away. However, if you're not using the termial you can install [Latest](https://github.com/mangerlahn/latest) which is a GUI app that checks and installs updates the installed Apps at once.

## Menubar Apps

Menubar is a key component of the Mac-OS. Optimizing menubar realestate and getting the maximium use of it was a priority. So I did below.

- Installed [dozer](https://github.com/Mortennn/Dozer). This optimizes the menu bar space. [Bartender](https://www.macbartender.com) is a better app than this. However, it is a paid app. I might pay for Bartender given that with the Notch in new Mac-books, menu-swbar real-estate has become so precious.
- Installed [stats](https://github.com/exelban/stats) - Performance stats monitor that sits on the menubar. [istatmenu](https://bjango.com/mac/istatmenus/) is a better alternative. But it is a paid software. I would not pay for it though.
- Install [swish](https://highlyopinionated.co/swish/). It is a paid app. But one of the best window managers for mac. Utilizes gestures to manage the windows. Alternatives would be [penc](https://deniz.co/penc/).

## Customizing Finder and Some Tips

Finder is the default file manager of Mac-OS. This is far better than the windows explorer. In any OS you will be spending a lot of time in a file explorer. You an improve the functionality of Finder with below configs and tips.

Configs

- Make folders come on top ( Preferences >> advanced )
- Show all file name extensions
- Show hidden files in finder - `SHIFT + COMMAND + PERIOD `
- Status bar
	- Finder > View > Show Path Bar
	- Finder > Go > Hold down option > Library (you can now add to Sidebar from "File")
	- Finder > View > Show Status Bar
- Toolbar
	- Change the icons in the toolbar (by right-clicking)
	- Add required folders and apps to the toolbar
- Preferences
	- Finder > Preferences > General > Uncheck "Open folders in tabs instead of new windows"
	- Finder > Preferences > General > New Finder windows show "Documents" (instead of "Recents")
	- Finder > Preferences > Tags > Uncheck those you don't use
	- Finder > Preferences > Advanced > Search the Current Folder when performing a search
	- Finder > Preferences > Advanced > Show folders at the top

Tips

- File Operations
	- Drag and drop copying --> copy to the parent folder by dropping into the info columns in the detailed view
	- Click on the expand icon of a folder with `OPTION` to expand old child folders
	- `COMMAND`+`OPTION` to create a folder alias
	- `OPTION`+drag to quickly copy a file or folder
	- `OPTION`+click to expand all child folders
	- `COMMAND`+`i` while selecting a file to change the default app to open with
- Open image in preview > Markup > Edit size and you can change the size of the file (proportions stay the same)
- Select multiple images > Right click > Quick actions > Create PDF (you can move the pages around)
- Open PDF > File > Export as PNG or JPEG
- Keynote presentations can be exported as a PPT file, Numbers can be exported as Excel files, and Pages as Word Doc files
- Multi-renaming files
- Cut pasting > Copy and then `OPTION` + `COMMAND` + `v`
	- Accessing Finder panels faster
	- Shift+Command+a > Applications
	- Shift+Command+o > Documents
	- Shift+Command+p > show file preview on the right side
- Other
	- In multi-column view, change column width whilst holding `OPTION` to resize all columns equally

## Screenshots

- Native Screenshot
	- `Shift+COMMAND+3` > Capture Full Screen
	- `Shift+COMMAND+4` > picture of a selection
	- `Shift+COMMAND+4` and then press space > picture of a window
	- `Shift+COMMAND+4` and then press and hold space > move the selection
	- `Shift+COMMAND+4` and then press and hold space and move and release space and resize (if holding `OPTION` resize from the middle) >> different option combinations with `OPTION` and `COMMAND`
	- `Shift+COMMAND+4` and then space and then click whilst holding `OPTION` > screenshot without the formatting and shadows
	- `Shift+CTRL+COMMAND+4` > don't save the screenshot to the folder. but copy to clipboard.
	- `Shift+COMMAND+5`
- Other screenshot software
	- [Skitch](https://apps.apple.com/us/app/skitch-snap-mark-up-share/id425955336?mt=12)

## Other Configurations

- Dock
	- Move the Dock to the left or right side. . With wide screen displays, having the dock at the bottom is a waste of screen real-estate.
	- Adjust the dock autohide timing to zero seconds [Tinker Tool](http://www.bresink.com/osx/0TinkerTool/download.php)
- Touchpad
	- Enable three-finger drag (in accessibility settings)
	- Increase tracking speed
	- Enable tap to click (trackpad settings)
- Activate hot-corners
	- `Desktop and screensavers > screen saver > hot corner`
	- If you only want to activate it when a modifier is pressed, in the dropdown menu select the action while holding the modifier. [details](https://youtu.be/9Lz7jliEvGg?t=2011)
- Accessibility > reduce motion
- Enable battery percentage in `System Preferences > Dock and Menu Bar > Battery > Enable Battery Percentage`
- Enable night shift in display. This automatically activates the nighttime brightness based on the time to reduce bluelight strain during night time. This is a must have for your well-being and for a good nights sleep.
- Disable true-tone in display settings
- Change to Scaled > More space (This makes text smaller, but significantly improves productivity due to more space.
- Right-click on the desktop and enable stacks. This immediately unclutters the desktop
- Keyboard
	- Enable key repeating. By default, when a key is held, it types a special character instead of repeating the key. You can either use the Tinker-Tool or Command Line method (https://www.howtogeek.com/267463/how-to-enable-key-repeating-in-macos/) ie. `defaults write -g ApplePressAndHoldEnabled -bool false`. To revert to default do `defaults write -g ApplePressAndHoldEnabled -bool true`
	- Shorten the `delay until repeat keys`. This increases the repetition speed.
	- Enable `F1`, and `F2` keys without pressing the `fn` keys (in Preferences > keyboard). By default, the extra functionality such as brightness, and volume are activated with Function keys.
	- Swap the function and Control keys. If you are coming from windows, this would significantly help. `Keyboard > Modifier keys > Swap Fn and Ctrl keys`
	- Preferences > keyboard > shortcuts > enable "use keyboard navigation to move focus between controls". This enables traversing through controls easily with the tab key.

## Configuration Using External Tools or Terminal

- More configuration using the [Tinker Tool](http://www.bresink.com/osx/TinkerTool.html)
	- Finder > Show hidden files
	- Dock options > Disable animations and delay
	- Launchpad > disable all
	- General
	- Support key repeat (This is mentioned above in the keyboard section)
	- this does `defaults write -g ApplePressAndHoldEnabled -bool false`
	- To revert from command line `defaults write -g ApplePressAndHoldEnabled -bool true`
	- [source](https://www.howtogeek.com/267463/how-to-enable-key-repeating-in-macos/)
	- Turn off `animate opening windows`
	- Applications > Don't ask for backup disks. This stops mac from asking whether it needs to use the plugged-in drive as a time machine backup, every time you plug in an external drive.
- More configuration using the [Terminal Commands](https://www.youtube.com/watch?v=9Lz7jliEvGg&t=1481s)
	- Screenshot format (can change JPG to PNG, TIFF, PDF)
	- `defaults write com.apple.screen capture type JPG`
	- Mac App Store update check frequency (change 7 to any number of days)
	- `defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 7`
	- Disable the character accent menu (revert by changing 'false' to 'true')
	- `defaults write -g ApplePressAndHoldEnabled -bool false`
	- Keep Mac running (end by closing the Terminal window or pressing Control+C)
	- `caffeinate`
	- Expand print dialogue by default (revert by changing TRUE to FALSE)
	- `defaults write -g PMPrintingExpandedStateForPrint -bool TRUE`
	- Re-enable classic Mac boot chime (restore default by changing %00 to %01)
	- `sudo nvram StartupMute=%00`
	- Add dock spaces (remove by dragging space off dock like normal)
	- `defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock`
	- Dock transition/reveal delay
	- `defaults write com.apple.dock autohide-delay -float 0; killall Dock` (reduces delay)
	- `defaults write com.apple.dock autohide-time-modifier -float 0; killall Dock` (removes animation)`

## Other Tips

- Drag windows under the current windows while holding the `COMMAND` key > then the below window will not come to the top. It will move behind the active window
- Show a custom message on the lock screen. eg. Have your mobile number or email in here. So if you left your mac somewhere and if a good samaritan finds it, they can inform you.
	- Preferences > security and privacy > (unlock admin) > set lock message
- Cancel Dialog boxes with `COMMAND + PERIOD`
- Use "Photo Booth" to check how you look before zoom meetings. Alternative is [handmirror](https://handmirror.app/)
- Printing
	- Go to printers and drag the required printer to the desktop. Then drag the document to the printer, and it will print (without any other dialog boxes)
- When using the QuickLook, hold the `SPACE` key. When you let go of it, QuickLook will close automatically. Quite useful if looking at multiple files quickly.
- When pasting text paste with `Shift+Option+Command+V` to paste as text
- Menu bar (System tray)
	- Hold the `COMMAND` key and drag and drop menu bar icons outside to remove them. Can only be done for some icons.
- Text Editing
	- Halfway typing a word and then pressing `F5` > shows a drop-down of word auto-completion
- Force quitting apps
	- Force quit option 1 - Use Activity Monitor
	- Force quit option 2 - COMMAND+OPTION+ESC
	- Force quit option 3 - Right click on the app in the dock and hold down OPTION
- Dock
	- Hold down "Shift" and drag the vertical line to move the Dock
	- In dock preferences, untick `show recent apps in the dock`
	- Enable auto-hide > But change the animation and delay settings using the tinker tool
	- Opt+COMMAND+D - Toggles dock show/hide
	- Add AirDrop to Dock (a) go to Finder, (b) press Shift+COMMAND+G, (c) paste this: /System/Library/CoreServices/Finder.app/Contents/Applications/ (d) drag AirDrop icon into Dock
	- Right-click on the vertical line within the deck to quickly get to Dock Preferences

## Full Applications List

Do a web search with <application name\> mac app to find details. Almost all of the apps are available in homebrew. So simply search for the app with `brew search <app name>` and install with `brew install <app name>`

- Archiving tools
	- unarchiver
	- kaka
	- betterzip (PAID) > this allows looking at the archives using QuickLook. (enable in the app settings)
- video player
	- iina
	- RSS Raadrs
	- [Net News Wire](https://netnewswire.com/)
- Pdf reader
	- Skim
- Utilities
	- Fluid - Create apps from any website.
	- Downie (PAID) - Media downloader
	- [uebersicht](https://tracesof.net/uebersicht/). - Conky like desktop widgetGet widgets from [here](https://tracesof.net/uebersicht-widgets/)
	- [Drop zone (Paid)](https://aptonic.com/)Drop files and folders
	- [disk inventory x](http://www.derlien.com/) - Disk Usage Monitor
	- Tinker tool - https://www.bresink.com/osx/TinkerTool.html - Mac customization (Eg. improve launcher bar. Refer https://www.youtube.com/watch?v=h2xoRkzjQoc)
- Status Bar
	- [Dozer](https://github.com/Mortennn/Dozer/)
	- alternative: [Hidden Bar](https://github.com/dwarvesf/hidden)
	- alternative: Bartender (PAID)
	- Stats - display system stats
	- alternative: istat menus
- Launcher
	- [Raycast](https://www.raycast.com/)
	- better paid alternative: [Alfred](https://www.alfredapp.com/) (PAID)
- Clean unwanted apps
	- [clean-me](https://github.com/Kevin-De-Koninck/Clean-Me)
	- [App Cleaner](https://freemacsoft.net/appcleaner/)
	- [onyx](https://www.titanium-software.fr/en/onyx.html)
- Mouse tools
	- mos
- OCR
	- Text sniper(PAID)
- Window Management
	- Rectangle (Free) - https://rectangleapp.com/
	- [penc](https://deniz.co/penc/)
	- Spectacle (not maintained),
	- magnet (PAID)
	- Moon (Paid) - https://manytricks.com/moom/
	- [swish](https://highlyopinionated.co/swish/)
- Tiling Window Manager
	- Amethyst
	- Yabai with Shkd —> video josh Medeski - blazing fast window management
	- Space launcher for Mac OS. —> same video as above
- Clipboard Manager
	- [Maccy (Free)](https://github.com/p0deje/Maccy)
	- alternative -[Copy Clip (Free)](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960?mt=12)
- Torrent Download
	- Transmission
- Keep the mac awake
	- Amphetamine
- Display the app's shortcuts
	- [Cheat Sheet](https://www.mediaatelier.com/CheatSheet/)
- Local audio recorder that lets you save audio your mic heard in the past.
	- [Backtrack](https://www.backtrack.team/)
- App updaters
	- [Latest](https://github.com/mangerlahn/latest) - checks for updates for all installed apps at once
	- MacUpdater (PAID)
- Commandline like calc
	- Numi - https://numi.app/
- Windows like alt-tab
	- alttab - https://alt-tab-macos.netlify.app/
- multi-browser tool
	- Enables opening links in selected browsers
- Workspaces management - Enables opening a predetermined list of applications
	- [bunch](https://bunchapp.co/)
	- Workspace (PAID) - Faster workspace creation
	- Workspaces Pro (PAID)- Faster workspace creation
- Vim-like access - Access GUI elements with keyboard]
	- [Vim Easy motions for mac](https://github.com/dwarvesf/VimMotionApp)
- Type in your iPhone using mac
	- [Keypad - Bluetooth keyboard](https://apps.apple.com/in/app/keypad-bluetooth-keyboard/id1491684442)
- Run Windows apps like native apps
	- Parallels (PAID)

# Paid List That is Worthwhile to Consider

- Dropzone
- Workspace - Faster workspace creation OR Workspaces Pro - Faster workspace creation
- Text sniper
- Parallels
- Alfred powerpack
- swish
---

# Full List of Installed Apps

- Alfred 5.app
- AltTab.app
- App Cleaner 7.app
- AppCleaner.app
- Brave Browser.app
- Bunch.app
- Caffeine.app
- CheatSheet.app
- Clean Me.app
- Disk Inventory X.app
- Dozer.app
- Dropzone 4.app
- Fluid.app
- IINA.app
- Kap.app
- Karabiner-Elements.app
- KeePassXC.app
- Keynote.app
- Latest.app
- Maccy.app
- Malwarebytes.app
- Mos.app
- Numi.app
- OnyX.app
- Penc.app
- ProtonVPN.app
- Raycast.app
- Rectangle.app
- Skim.app
- Skitch.app
- Slidepad.app
- Stats.app
- Swish.app
- TextMate.app
- TextSniper.app
- TinkerTool.app
- Visual Studio Code.app
- WorkspacePro.app
- Workspaces.app
- iTerm.app
- xbar.app
- zoom.us.app

  

## References

- [awesome mac apps](https://github.com/jaywcjlove/awesome-mac)
- [Mac apps list](https://github.com/serhii-londar/open-source-mac-os-apps)
- [video by Jeffsu](https://www.youtube.com/watch?v=-xXc7qeiC8I)
- [150+ Mac Tips and Tricks - by Snazzy Labs](https://www.youtube.com/watch?v=9Lz7jliEvGg&t=69s)
- [digital inspiration](https://www.labnol.org/software/essential-mac-utilities/9479/)
- [10 Next-Level Mac Apps You Didn't See Coming (Free & Paid)](https://www.youtube.com/watch?v=dPddVTRBScw)
- [Unbelievably Useful Mac Apps](https://www.youtube.com/watch?v=o2RRDS2tIoY)
- [Unbelievably Useful Mac Apps #2](https://www.youtube.com/watch?v=0DSWeFLgMMI)
- [Unbelievably Useful Mac Apps #3](https://www.youtube.com/watch?v=oKXApo3nuHY)