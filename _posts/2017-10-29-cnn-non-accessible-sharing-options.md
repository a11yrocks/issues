---
layout: post
title: Non-accessible sharing options
date: 2017-10-28 19:51:10 +0200
app_name: "CNN"
app_url: https://cnn.com
tag: "non-perceivable"
media: /assets/img/2017-10-29-cnn-non-accessible-sharing-options.jpg
---

CNN uses a third-party share utility. When using VoiceOver, is impossible for the user to know which share option is selected, since the only thing VoiceOver reads is "Table start", due the poor HTML semantic from the third-party widget. [Check the HTML markup](https://gist.github.com/AgtLucas/a3295896ea6604886ab7e4807f3c95e3).

<div class="post-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4L_quDQ_C04" frameborder="0" gesture="media" allowfullscreen></iframe>
</div>

* Hardware: iPhone 7 (iOS 11.0.3).
* Software: Safari with VoiceOver enabled.
