---
author: roberto
comments: false
date: 2012-01-10 09:43:02
layout: post
slug: combine-pdfs-using-automator-on-a-mac
title: Combine pdfs using Automator on a Mac
wordpress_id: 390
categories:
- Journal
tags:
- Mac
- Tips
---

Have you ever needed to make lots of pdfs into a single document? It's possible using sidebar in Preview, but it doesn't always behave well for me.

Enter Automator. This brilliant application comes with Macs. As the name suggests, you can use it to speed up lots of tedious, manual tasks.

Here's how to combine pdfs:

  1. Open Automator.
  2. Drag "Get Selected Finder Items" from the actions on the left to the workflow on the right.
  3. Drag "Combine PDF pages" from the actions on the left to the workflow on the right.
  4. Drag "Open Finder Items"  from the actions on the left to the workflow on the right.

You've built your first Automator workflow. Now:

  1. Select the pdfs your want to merge in Finder.
  2. In Automator, click Run (top right)

The program will now take the pdfs you've selected, merge them together and open the new pdf in Preview. You can then save that pdf.







Also save the Automator workflow to use again.





