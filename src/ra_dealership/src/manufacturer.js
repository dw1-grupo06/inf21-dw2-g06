import { Create, Datagrid, DeleteButton, Edit, EditButton, List, NumberField, NumberInput, SearchInput, SimpleForm, TextField, TextInput } from "react-admin";

const postFilters = [
    <SearchInput source="name" alwaysOn />
];

export const ManufacturerList = props => (
    <List {...props} filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="founded" />
            <TextField textAlign="center" source="description" />
            <EditButton textAlign="center" />
            <DeleteButton textAlign="center" />
        </Datagrid>
    </List>
);

export const ManufacturerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="founded" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const ManufacturerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="founded" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);