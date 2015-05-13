var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Author Model
 * ==========
 */

var Author = new keystone.List('Author', {
	autokey: { path: 'abbreviation', from: 'name surname', unique: true },
});

Author.add({

	name: { type: Types.Text, initial: true, required: true, index: true },
	surname: { type: Types.Text, initial: true, required: true, index: true }
});


/**
 * Registration
 */

function getAbbreviation() {
	return this.surname + ", " + this.name[0] + ".";
}

Author.defaultColumns = 'id, name, surname';
Author.register();
