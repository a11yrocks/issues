# Contributing
Want to contribute to Issues? Awesome! We're open to all sort of contributions: features and fixes in the existing website, suggestions, bug reports,  accessibility issues you've found on web.

## Get ready!
1. Fork the project on GitHub.
2. Install npm dependencies by running `npm install` and make sure you have Ruby and Jekyll installed (see the [installation guide for Jekyll](https://jekyllrb.com/docs/installation/)).
3. Commit your changes in a feature Git branch. 
4. Submit a pull request on GitHub.

## Report an accessibility issue
Have you found a website or app that breaks one or more of the [**Four Principles of Accessibility**](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head)?  Contribute! There are 2 ways to contribute with an accessibility issue you've found.

1. Clone the project (see "Getting ready" section above) and add your issue to `_posts`. 
2. Open a [GitHub issue](https://github.com/a11yrocks/issues/issues) with your report.

If possible, describe the report as clearly and detailed as you can, including steps to reproduce, what principle has been broken, browser version, OS etc. See [existing issues](https://issues.a11y.rocks/) for examples.

Example of a report of an [accessibility issue on Tinder](https://issues.11y,.rocks/report/2017-11-04-tinder-close-button-for-intrusive-modal-isnt-accessible):
```js
---
layout: post
title: "Close button for intrusive modal isn't accessible"
date: 2017-11-04 18:25:10 +0200
app_name: "Tinder"
app_url: https://tinder.com
tag: "non-operable"
media: https://i.imgur.com/STw1ljr.png
---

Tinder opens a modal for signing up right at the beginning of the browsing experience. Besides that, the close button isn't reachable by keyboard, because `div` is being used instead of `button`.

![Tinder's sign up modal](https://i.imgur.com/STw1ljr.png)

* Software: Chrome 61
```

All contributions are welcome. Thank you!

