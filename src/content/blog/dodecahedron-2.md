---
title: "Dodecahedron #2"
date: 2026-05-02
description: "Guide mode, an onboarding tour, and a few rough edges sanded down"
draft: false
project: dodecahedron
---

The first version of the [tool](https://dodecahedron.vercel.app) worked for me — I had built it, so I knew what to click. But sitting with it a bit longer, two gaps became obvious:

- nothing told a new visitor what to do when they opened it
- even once you got going, the tool didn't help you decide which unit to place next

Most of this round was about closing those two gaps.

## Guide mode

When I assemble one of these models in real life, I don't pick edges at random. I tend to start from one face and work outward, keeping the next edge somewhere I can actually reach without flipping the model around. Guide mode bakes that experience into the app: turn it on, and the next edge to place lights up in both the Schlegel diagram and the 3D preview.

It's a small thing, but it's the difference between a tracking tool and an assembly companion.

## Tour

A first-time visitor now sees a five-step tour: a welcome with the Schlegel diagram, then the diagram input, the 3D preview, Guide mode, and custom colors. It only fires once (gated by a `localStorage` flag), but there's a Tour button in the controls to reopen it whenever you want.

## Smaller fixes

- Mobile rotation no longer fights with page scroll
- Per-slot color picker, so you can match the model in front of you — decoupled from the Guide highlight
- README, favicon, and About/Source links — the basics

*Drafted by Claude, edited by a human.*
