AUI.add(
	'UserName-form-field',
	function(A) {
		var UserNameField = A.Component.create(
			{
				ATTRS: {
					type: {
						value: 'UserName-form-field'
					}
				},

				EXTENDS: Liferay.DDM.Renderer.Field,

				NAME: 'UserName-form-field',

				prototype: {
					initializer: function() {
						var instance = this;

						instance.set('value', Liferay.ThemeDisplay.getUserName());
					}
				}

			}
		);

		Liferay.namespace('DDM.Field').UserName = UserNameField;
	},
	'',
	{
		requires: ['liferay-ddm-form-renderer-field']
	}
);