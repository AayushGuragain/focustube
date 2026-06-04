# FocusTube

A distraction controlled YouTube client designed for long form learning, intentional viewing, and reduced distraction.

## Problem

YouTube contains some of the best educational content ever created. Unfortunately, it also contains many features designed to maximize engagement rather than learning.

Shorts, autoplay, recommendation loops, and infinite scrolling often pull users away from their original purpose.

FocusTube is designed to solve that problem.

## Features

### Long Form Homepage Feed

The homepage displays only long form videos.

Short videos and Shorts do not appear in the main feed.

Users can configure a minimum video duration threshold.

### Long Form Search

Search results only include videos that meet the minimum duration requirement.

### Smart Link Handling

Users can paste any YouTube link into the application.

If the video is long form, it opens normally.

If the video is identified as short form content, a warning dialog appears asking whether the user still wants to watch it.

### Watch Later

Users can save videos to a Watch Later collection.

### Loved Videos

Users can save videos to a Loved Videos collection for repeat viewing.

### Channel Whitelist

Users can maintain a list of trusted channels.

### Channel Blacklist

Users can permanently hide channels.

### Keyword Blocking

Users can define blocked keywords.

### Daily Time Limit

Users can define a daily viewing limit.

When the limit is reached:

A 15 second countdown begins.

The screen alternates between light gray and dark gray every second.

The following message is displayed while the gray and dark gray blinking is going on:

"Think about what you actually want to do."

After the countdown, the user can:

Start Work

Extend Today's Time Limit

The Start Work button redirects users to their configured Work Page.

Default Work Page:

github.com

If the user extends the limit, they are returned to the exact video and timestamp they were watching.

### No Shorts

The platform contains no Shorts section.

### No Infinite Scroll

Homepage feeds and search results use pagination.

### Study Mode

Study Mode creates a focused learning environment.

### Learning Notes

Users can take notes beside videos.

### Videos With Notes

Videos containing notes are automatically added to a Videos With Notes section.

### Reflection Prompt

After a video ends in Study Mode, the user is asked:

"What did you learn from this video?"

## Legal and Platform Compliance

FocusTube is not intended to replace YouTube or redistribute YouTube content.

The application functions as a custom user interface built on top of official YouTube services. All video playback is performed through official YouTube embeds and approved APIs.

The project is designed as a personal productivity tool that changes how content is discovered and consumed rather than changing the content itself.