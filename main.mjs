/**************************************************************/
// main.mjs
// Written by Mio Hoffman, Term 1 2026
// Main entry for index.html
/*************************************************************/
const COL_C = 'white';
const COL_B = '#CD7F32';
console.log('%c main.mjs',
            'color: blue; background-color: white;');

//Import all external constants and functions required

import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise = fb_initialise;

import { fb_authenticate }
    from './fb_io.mjs';
    window.fb_authenticate = fb_authenticate;

import { ASC }
    from './fb_io.mjs';
    window.ASC = ASC;

import { fb_signOut }
    from './fb_io.mjs';
    window.fb_signOut = fb_signOut;

import { write }
    from './fb_io.mjs';
    window.write = write;