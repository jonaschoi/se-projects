package com.liferay.dynamic.data.mapping.type;

import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldType;

import org.osgi.service.component.annotations.Component;

/**
 * @author liferay
 */
@Component(
	immediate = true,
	property = {
		"ddm.form.field.type.display.order:Integer=9",
		"ddm.form.field.type.icon=user",
		"ddm.form.field.type.js.class.name=Liferay.DDM.Field.UserName",
		"ddm.form.field.type.js.module=UserName-form-field",
		"ddm.form.field.type.label=UserName-label",
		"ddm.form.field.type.name=UserName"
	},
	service = DDMFormFieldType.class
)
public class UserNameDDMFormFieldType extends BaseDDMFormFieldType {

	@Override
	public String getName() {
		return "UserName";
	}

}