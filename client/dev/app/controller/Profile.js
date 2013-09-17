Ext.define('AppTemplate.controller.Profile', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			profileForm: 'profile',
			flyOutNavBtn: 'button[id=navBtnFlyOutNav]',
			globalHomeBtn: 'button[id=homeBtn]',
			profileSaveButton: 'button[id=profileSaveButton]',
			profileCancelButton: 'button[id=profileCancelButton]',
			mainContainer: 'main',
			nameField: 'textfield[id=profileNameTextField]',
			emailField: 'emailfield[id=profileEmailTextField]'


		},
		control: {
			profileForm: {
				activate: 'activate'
			},
			profileCancelButton: {
				tap: 'profileDoCancel'
			},
			profileSaveButton: {
				tap: 'profileDoSave'
			}
		}
	},

	activate: function() {
		var me = this;
		//We do checkLocalProfile at the start which adds the userDetails object to the main container. Check it and populate fields
		var profileSettings = me.getMainContainer().profileSettings;
		if (profileSettings) {
			this.getNameField().setValue(profileSettings.name);
			this.getEmailField().setValue(profileSettings.email);
		}
	},

	checkLocalProfile: function() {
		var me = this;
		//This function checks to see if local storeage profile settings is empty. If it is force the Profile screen and remove cancel, home and flyoutNav buttons
		this.getApplication().getController('Util').loadLocalStorage('local_profile', function(userDetails) {
			//null indicates first time use.
			if (userDetails === null) {
				Ext.Msg.alert("Profile", "You must fill your profile information", function() {
					me.getApplication().getController('Home').handleDashboardButton({
						id: 'dash_profile'
					});
					me.getProfileCancelButton().hide();
					me.getGlobalHomeBtn().hide();
					me.getFlyOutNavBtn().hide();
				});
			} else {
				me.getMainContainer().profileSettings = userDetails;
			}
		});
	},

	profileDoSave: function() {
		var me = this;
		var name = this.getNameField().getValue(),
			email = this.getEmailField().getValue();

		//Check if any values are blank
		if (name === "" || email === "" || name.trim() === "") {
			Ext.Msg.alert("Profile", "You must complete all fields");
			return false;
		}

		//Check if email is in correct format and remove spaces and set value (Defect Amit has raised in the past)
		email = email.replace(/\s+/g, '');
		this.getEmailField().setValue(email);
		if (/^.+@.+\..+$/.test(email) === false) {
			Ext.Msg.alert('Incorrect Email', "You must enter a valid email address", Ext.emptyFn);
			return false;
		}

		var localProfileDetails = {
			name: name,
			email: email
		};

		this.getApplication().getController('Util').saveLocalStorage('local_profile', localProfileDetails);
		this.getMainContainer().profileSettings = localProfileDetails;

		Ext.Msg.show({
			title: 'Success!',
			message: 'Profile Saved',
			buttons: []
		});

		setTimeout(function() {
			Ext.Msg.hide();
			me.getProfileCancelButton().show();
			me.getGlobalHomeBtn().show();
			me.getFlyOutNavBtn().show();
			me.getApplication().getController('Home').switchCard('AppTemplate.view.Home', 'Home');
		}, 2500);



	},
	profileDoCancel: function() {
		var me = this;

		var view = 'AppTemplate.view.Home';
		me.getApplication().getController('Home').switchCard(view, 'Home');

	}
});