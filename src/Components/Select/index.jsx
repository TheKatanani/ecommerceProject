import { SelsctStyled } from "./styled";

const Select = ({ value, onChange, options ,defualt}) => (
    <SelsctStyled defualt={defualt} value={value} onChange={onChange}>
        {options.map(option => (
            <option value={option.value}>{option.label}</option>
        ))}
    </SelsctStyled>
);

export default Select;