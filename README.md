songdown-songs
==============

This repository contains all of the source files for the songs found on the Songdown site. Everything is in the public domain because I'm not a lawyer (or anyone of that level of qualification) who understands these things.

Syntax
======

The syntax of a song is designed to be as simple as possible.

Every song is comprised of verses. Each verse has a heading, something inside it and an end marker. Like this:

```
This is a Verse Header:
Here be musical things.

..and right below here is the end marker.
---
```

There are three types of verses that you can make. They're distinguished by the last character of the verse header. A `+` means a verse of just chords. A `-` means a verse of just lyrics. A `:` means a normal verse of chords and lyrics together; this is the most commonly used verse type.

```
This Verse is just for Chords+
C Am Em G
---

This Verse is just for Lyrics-
Somewhere deep inside, something's got a hold on you
---

This Verse is for Chords and Lyrics:
C                Am                      Em           G
Somewhere deep inside, something's got a hold on you
---
```
