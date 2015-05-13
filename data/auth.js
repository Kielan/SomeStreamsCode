var bcrypt = require('bcrypt-nodejs');

module.exports = [
	{
		user_id: '53aa4c843bd562c01edd2714',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$jj41tno9s59uj6TeTQyyuu'),
		two_factor: {
			enabled: false,
			phone_number: 16043600115
		}
	},
	{
		user_id: '53aa4c843bd562c01edd2713',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$oC9Emk6Lr9/MRNk24GA/9O'),
	},
	{
		user_id: '53aa4c843bd562c01edd2712',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$e4FpxJ6ZYg0.CKgbw3mLfe'),
	},
	{
		user_id: '53aa4ca13bd562c01edd2717',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$/HeFrEB2VdO7NIJqCDCO4.'),
	},
	{
		user_id: '53aa4ca13bd562c01edd2716',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$XaLPBtBB7sXzHeRSDWLlXu'),
	},
	{
		user_id: '53aa4ca13bd562c01edd2715',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$xjX7Kky3jWNDYgpABihDYe'),
	},
	{
		user_id: '53aa4cbc3bd562c01edd2718',
		encrypted_password: bcrypt.hashSync('123456', '$2a$10$HD6OZ77Qm1kRIjdFBzXtDe'),
		two_factor: {
			enabled: true,
			phone_number: 16043600115
		}
	},
]