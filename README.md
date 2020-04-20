# sp-colorCalendar-JS
## SharePoint Color Calendar

## Quick Start

1. Create a calculated column: concatenate(title, " ||| ", category)
2. Change all default views, where the column you created, replaces title
3. Edit the page the calender appears on include bundle.js from ./public/build. 
4. Edit your categories. [Name] ||| [Background Color] ||| [Font Color] i.e., "Meeting ||| Red ||| gold"  
5. The separator was selected to be unique, if you need a different separator, "|||" change SEPARATOR variable in the script.

## Customize this project template 
Create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit SharePoint-Repo/sp-colorCalendar-js myColorCalendarProject
cd myColorCalendarProject
npm install
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


*Looking for a shareable component template the works with SharePoint? Coming Soon*

---


### Prerequisites

Requires [Node.js](https://nodejs.org/)
It's very helpful if you have access to SharePoint, since this is a SharePoint development starter kit template.
The generated project will work with SharePoint 2013, SharePoint 2016, SharePoint 2019, and SharePoint Online. 