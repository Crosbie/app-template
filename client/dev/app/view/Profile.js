Ext.define('AppTemplate.view.Profile', {
	extend: 'Ext.Panel',
	xtype: 'profile',
	requires: ['Ext.field.Select', 'Ext.form.FieldSet', 'Ext.Label', 'Ext.form.Panel', 'Ext.field.Email'],
	config: {
		html: 'Profile View',
		id: 'profilePanel',
		iconCls: 'user',
		items: [{
				xtype: 'toolbar',
				docked: 'bottom',
				items: [{
						xtype: 'button',
						text: 'Cancel',
						ui: 'decline',
						id: 'profileCancelButton'
					}, {
						xtype: 'spacer'
					}, {
						xtype: 'button',
						text: 'Save',
						ui: 'confirm',
						id: 'profileSaveButton'
					}
				]
			}, {
				xtype: 'formpanel',
				height: '100%',
				id: 'profileFormPanel',
				scrollable: {
					direction: 'vertical',
					directionLock: true
				},
				items: [{
						xtype: 'fieldset',
						title: 'Your Details',
						id: 'personalDetailsFieldset',
						instructions: 'Fields marked * are mandatory',
						items: [{
								xtype: 'textfield',
								name: 'name',
								id: 'profileNameTextField',
								required: true,
								label: 'Name',
								labelWidth: '45%',
								labelWrap: true,
								clearIcon:false,
								maxLength: 30
							}, {
								xtype: 'emailfield',
								name: 'email',
								id: 'profileEmailTextField',
								label: 'Email',
								labelWidth: '30%',
								labelWrap: true,
								required: true,
								clearIcon:false,
								maxLength: 50
							}
						]
					}
				]
			}
		]
	}
});