var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Book Model
 * ==========
 */

var Book = new keystone.List('Book');

Book.add({
	isbn: { type: Types.Text, initial: true, required: true, index: true },
	title: { type: Types.Text, initial: true, required: true, index: true },
	authors: { type: Types.Relationship, ref: 'Author', many: true },
	numCopies: {type: Types.Number, initial: true}
}, 'Available', {
	isAvailable: { type: Boolean, label: 'Available'}
});

/**
 * Registration
 */

Book.defaultColumns = 'isbn, title, author, isAvailable';
Book.register();
