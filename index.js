//--------------------------------------------------------
//-- File System Sync
//--------------------------------------------------------
'use strict';

const fs  = require('fs');
const fsx = require('fs-extra');


module.exports = {
	exists:    fs.existsSync,
	readdir:   fs.readdirSync,
	readFile:  fs.readFileSync,
	realpath:  fs.realpathSync,
	symlink:   fs.symlinkSync,
	writeFile: fs.writeFileSync,

	copy:      fsx.copySync,
	ensureDir: fsx.ensureDirSync,
	remove:    fsx.removeSync,

	move: (source, dest, options) => {
		fsx.copySync(source, dest, options);
		fsx.removeSync(source);
	}
};
