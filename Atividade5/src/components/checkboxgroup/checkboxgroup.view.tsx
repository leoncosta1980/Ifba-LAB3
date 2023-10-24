

import { Checkbox } from '..';
import {style as sty} from './checkboxgroup.styles';

interface CheckboxGroupProps {
  children: any;
}

const Checkboxgroup: React .FC<CheckboxGroupProps> =({children}) => {
return (
	<div>
		<sty.containergroup>
			<div>
				<div className="fildsetcheckbox">
					<Checkbox id="all" name="all" label="Todos"/>
            {children}       
				</div>
			</div>		
	</sty.containergroup>
	</div>
);
};

export {Checkboxgroup};
