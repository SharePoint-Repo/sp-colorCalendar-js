# sp-colorCalendar-JS
## SharePoint Color Calendar
![alt text](https://github.com/SharePoint-Repo/sp-colorCalendar-js/blob/master/colorCalendar.png "SharePoint Color Calendar")
## Quick Start

1. Create a calculated column: concatenate(title, " ||| ", category)
![alt text](https://github.com/SharePoint-Repo/sp-colorCalendar-js/blob/master/NewCalcCol.PNG)
2. Change all default views, where the column you created, replaces title
![alt text](https://github.com/SharePoint-Repo/sp-colorCalendar-js/blob/master/updateView.PNG)
3. Edit your categories. [Name] ||| [Background Color] ||| [Font Color] i.e., "Meeting ||| Red ||| gold"  
![alt text](https://github.com/SharePoint-Repo/sp-colorCalendar-js/blob/master/categoryfield.png)
4. Edit the page the calender appears on; include bundle.js from ./public/build. 
---
- Note: The separator was selected to be unique, if you need a different separator, "|||" change SEPARATOR variable in the script.

## Alternatively, create your own color calendar code using this project template 
Create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit SharePoint-Repo/sp-colorCalendar-js myColorCalendarProject
cd myColorCalendarProject
npm install
```
### Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint.
The generated code will work with SharePoint 2013, SharePoint 2016, SharePoint 2019, and SharePoint Online (classic). 
