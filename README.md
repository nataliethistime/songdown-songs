# songdown-songs [![Circle CI](https://circleci.com/gh/1vasari/songdown-songs/tree/master.svg?style=svg)](https://circleci.com/gh/1vasari/songdown-songs/tree/master)

This repository contains all of the source files for the songs found on the Songdown site.

# Syntax

The syntax of a song is designed to be as simple as possible.

## Verses
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

## Goto's

Once you have made a few verses, what happens if you want to go back and play one of them again?
You use the `->` sign!

If you have a sone which looks like this:
```
Verse 1:
Play some stuff here.
---

Verse 2:
Play some more stuff here.
---
```

Then you can go back to `Verse 1` like this:

```
-> Verse 1
```

You cna play `Verse 2` twice like this:

```
-> Verse 2 x2
```

You can also add extra instructions, like this:

```
-> Verse 1 x2 (softly fist time, build second time)
```

In the last example, there are three parts: the name (`Verse 1`), the number of times to repeat (`x2`) and the extra instructions (`(softly fist time, build second time)`). These sections can be in any order, as long as the `x` is before the number (for repeats) and the extra instructions are in brackets.

# License

This project is made with love, under the MIT license, by [@1vasari](https://twitter.com/1vasari). :heart:
