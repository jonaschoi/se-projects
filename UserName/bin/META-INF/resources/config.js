;(function() {
	AUI().applyConfig(
		{
			groups: {
				'UserName-group': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'UserName-form-field': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'UserName_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'UserName-form-field-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'UserName.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();