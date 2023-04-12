# WorkDayScheduler

## LIVE URL (yet to be completed)

https://thatonemhmd.github.io/03-PasswordGenerator/

## Description

This is a webpage for the improved Work Day Scheduler. Given that the user is an employee with a busy schedule, the webpage gives them the ability to add important events into a daily planner so that they can manage their time effectively. In essence, once opened, the webpage will provide them with a simple calendar application that allows them to save events for each hour of their work day, that being 9AM to 5PM. It is worth mentionging that this app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.

## Screenshot of the updated website

![Work Day Scheduler - challene 05](https://user-images.githubusercontent.com/126360257/231563339-eab56be1-0605-4dab-bb07-f91e0ba53f78.png)

## Features

- When opened, the planner displays the current day, date, and time at the top of the screen
- When scrolling down, the user is presented with time blocks for standard business hours (that being 9AM to 5PM)
- When timeblocks are viewed for the day, each one is colour coded to indicate whether it is in the past (grey), present (red), or future (green), relative to the current time
- When a certain timeblock is clicked, the user can input an event (by typing words/numbers/sentences etc.)
- When the individual save button (in each time block) is clicked, the text for that event is saved in local storage
- When the page is refreshed, those saved events presist while unsaved events do not
- When the Save Entire Schedule button is clicked, the events in all timeblocks are saved and stored in local storage meaning that they would presist even when oage is refreshed
- When the Clear Schedule button is clicked, the local storage is cleared and all events are deleted whether they have been previosly saved or not
- Periodically, after every three minutes, the page is refreshed so that any unsaved events are deleted. This was doen for multiple reasons, but mainly because it keeps the page organized as well as makes it easier to keep track of important saved events instead of having unsaved events crowding the page

## Note 

To access the base HTML file of the webpage, click on the index.html file above! The CSS and JavaScript files can be found in the assets file!

## License

MIT

## Credits

ThatOneMHMD - The creator of this website!
(Link: https://github.com/ThatOneMHMD)

Xandromus - The provider of the starter code!
(Link: https://github.com/coding-boot-camp/crispy-octo-meme.git)

