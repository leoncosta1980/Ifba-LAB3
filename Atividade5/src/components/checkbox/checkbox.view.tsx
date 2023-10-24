

import React, {useState} from 'react';

import {style as sty} from './checkbox.styles';

interface CheckboxProps {
	label: string;
	name: string;
	id: string;
}

const Checkbox: React .FC<CheckboxProps> =({ label, name, id}) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () =>
{
	setIsChecked(!isChecked);
};

return (
	<div>
		<sty.container>
			<div>
				<div className="chkbox">
						<input 
						type="checkbox"
						id={id}
						name={name}
						checked={isChecked}
						onChange={handleCheckboxChange}/>
						<span className="check"></span>
					<label htmlFor={name}>{label}</label>
				</div>
			</div>
		
	</sty.container>
	</div>
);
};

export {Checkbox};

