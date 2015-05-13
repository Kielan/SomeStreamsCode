var bcrypt = require('bcrypt-nodejs');

module.exports = [
	{
		_id: '53aa4ca13bd562c01edd2716', 
		fname: 'Christopher',
		phone_number: 6043600114,
		verified: true,
		lname: 'Schrader',
		email: 'c.schrader@gmail.com',
		age: 20,
		subjects: [{
			category: { en: 'physics' },
			levels: [{ en: 'University' }]
		}, {
			category: { en: 'mathematics' },
			levels: [{ en: 'High School' }]
		}],
		gender: 'male',
		role: 'client',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		location: {
			coordinates: { type: 'Point', coordinates: [114.152069, 22.266858] }
		},
	},
	{
		_id: '53aa4ca13bd562c01edd2715',
		fname: 'Ron',
		lname: 'Burgundy',
		verified: true,
		phone_number: 6043600118,
		email: 'r.burgundy@gmail.com',
		age: 22,
		subjects: [{
			category: { en: 'english' },
			levels: [{ en: 'IB HL' }] 
		}, {
			category: { en: 'mathematics' },
			levels: [{ en: 'University' }]
		}],
		gender: 'male',
		role: 'client',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		location: {
			coordinates: { type: 'Point', coordinates: [114.152069, 22.266858] }
		},
	},
	{
		_id: '53aa4cbc3bd562c01edd2718',
		fname: 'Brick',
		lname: 'Tamland',
		phone_number: 6043600119,
		email: 'b.tamland@gmail.com',
		age: 23,
		subjects: [{
			category: { en: 'history' },
			levels: [{ en: 'IB SL' }]
		}, {
			category: { en: 'mathematics' },
			levels: [{ en: 'IB SL' }]
		}],
		gender: 'male',
		role: 'client',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		location: {
			coordinates: { type: 'Point', coordinates: [114.152069, 22.266858] }
		},
	}
]
