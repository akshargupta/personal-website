---
title: "Dodecahedron #1"
date: 2026-04-19
description: "Definition of a 3-edge coloring and first attempt at the helper tool"
draft: false
project: dodecahedron
---

I love modular origami and how it has deep connections to seemingly obscure topics in mathematics. An example is the connection between 3-edge coloring of a dodecahedron and graph theory. There will be more technical explanations of the maths behind this connection in future videos and posts, but for now, I want to show off a model that exhibits this property that I made back in January 2019.

![Undina Kusudama designed by Maria Sinaskaya, folded by me](/blog/dodecahedron/origami-model.jpg)

In this model, you can see that each triangle is made of three different colours — gray, orange, and green.

I always struggle with the assembly of such models — trying to figure out which colour units should go where in order for the coloring to be valid at the end. So, I sometimes take help from a diagram like the one below to track the assembly.

![3-edge colored Schlegel diagram of a regular dodecahedron](/blog/dodecahedron/schlegel-diagram.svg)

I sat with Claude and vibe-coded a small [application](https://dodecahedron.vercel.app) that can help me with this!

![v1 of the application](/blog/dodecahedron/app-screenshot.png)

Now I can keep checking off the units that I have added and have a 3D reference in front of me to visualize my progress.

*Written by a human, proofread using Claude.*
