import { Create, Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";

export const OwnerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField textAlign="center" source="id" />
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="age" />
            <TextField textAlign="center" source="sex" />
            <EditButton textAlign="center" />
        </Datagrid>
    </List>
);

export const OwnerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <NumberInput source="age" />
            <TextInput source="sex" />
        </SimpleForm>
    </Edit>
);

export const OwnerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="age" />
            <TextInput source="sex" />
        </SimpleForm>
    </Create>
);