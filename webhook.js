
webhook.edit({
	name: 'Some-username',
	avatar: 'https://i.imgur.com/wSTFkRM.png',
	channel: '222197033908436994',
})
	.then(webhook => console.log(`Edited webhook ${webhook}`))
	.catch(console.error);
