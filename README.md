# Development Recipes
This repo contains the recipes gained through my development experience

## findOverflowParent
when you want the table headers to be sticky, you cannot have the parent of the table to have the *overflow* attribute set to other than *visible*. This script can hellp in finding the parents of the table which have this attribute, you can then disable it to make the table headers sticky.

## VSCode Debug options
contains debug configurations you can use to debug your source code, Vitest Tests, Jest Tests. For cypress tests debugging it's recommended to use the javascript native *debugger*, cypress API *.debug() or .pause()*.  
