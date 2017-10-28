# Contributing with reports

To report an accessibility issue, create a Markdown file under the [`_posts`](_posts)  directory with the following template.

Filename: YYYY-MM-DD-your-report-title.md

Content:

```markdown
---
layout: post
sitename: 'Website where you found the issue'
tag: "Non-perceivable"
media: my-image-for-the-issue
---

Here you can add any Markdown-valid content describing the accessibility issue and the steps to reproduce it. Screenshots or videos, and technical details about the device are appreciated.

```
> :warning: Your tag must be one of the following: `"Non-perceivable"`, `"Non-operable"`, `"Non-understandable"`. To know which one to use, refer to the [POUR principles](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head).


This will create a pull request, which will be merged after approval. Then, your issue will be available on the website.

Thank you!