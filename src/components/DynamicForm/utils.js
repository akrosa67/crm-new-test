import TextField from '../TextField'
import SelectField from '../SelectField'
import CheckboxField from '../CheckboxField'
import RadioboxField from '../RadioboxField'
import MultiSelectField from '../MultiSelectField'
import TextareaField from '../TextareaField'
import ExpandableTableField from '../ExpandableTableField'

export const ImplementationFor = {
    text: TextField,
    select: SelectField,
    checkbox: CheckboxField,
    radio: RadioboxField,
    multiSelect: MultiSelectField,
    textarea: TextareaField,
    table: ExpandableTableField
}

