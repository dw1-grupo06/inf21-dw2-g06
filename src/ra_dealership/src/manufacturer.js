import { Create, Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";

export const ManufacturerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField textAlign="center" source="id" />
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="founded" />
            <TextField textAlign="center" source="description" />
            <EditButton textAlign="center" />
        </Datagrid>
    </List>
);

export const ManufacturerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
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