# Polymorhpic Frontend Proof-of-Concept

This repository is a proof-of-concept that explores the concept of a polymorphic frontend implementations.

In `apps`, there are four implementation of the same app using different frameworks - Angular, React, Svelte and Vue. Each framework implementation shares the same state and style code.

The goal of this proof-of-concept is abstract non-framework related logic as much as possible.

## Benefits
* Abstracted code is framework agnostic
* Multiple framework-based apps can all use the same logic simulatenously.
* The abstracted code is future-proof. Frameworks become much more disposible, allowing them to come and go much easier as frontend tech churns.

## Apps
| Framework | Port | Emotion | Redux |
|---|---|---|---|
| Angular | 4000 | [x] | [] |
| React | 4001 | [x] | [x] |
| Svelte | 4002  | [x] | [] |
| Vue | 4003  | [x]* | [] |

* At the moment, Vue is a bit buggy because of linting + TypeScript.

## Running
1. `yarn install`
1. `yarn start:apps`
