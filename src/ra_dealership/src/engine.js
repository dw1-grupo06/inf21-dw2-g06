import { Create, Datagrid, DeleteButton, Edit, EditButton, List, NumberField, NumberInput, ReferenceInput, SearchInput, SelectInput, SimpleForm, TextField, TextInput } from "react-admin";

const postFilters = [
    <SearchInput source="name" alwaysOn />,
];

export const EngineList = props => (
    <List {...props} filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="horsepower" />
            <TextField textAlign="center" source="brand" />
            <EditButton textAlign="center" />
            <DeleteButton textAlign="center" />
        </Datagrid>
    </List>
);

export const EngineEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="horsepower" />
            <TextInput source="brand" />
        </SimpleForm>
    </Edit>
);

export const EngineCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="horsepower" />
            <TextInput source="brand" />
        </SimpleForm>
    </Create>
);