import { Create, Datagrid, DeleteButton, Edit, EditButton, List, NumberField, NumberInput, SearchInput, SimpleForm, TextField, TextInput } from "react-admin";

const postFilters = [
    <SearchInput source="name" alwaysOn />
];

export const OwnerList = props => (
    <List {...props} filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="age" />
            <TextField textAlign="center" source="sex" />
            <EditButton textAlign="center" />
            <DeleteButton textAlign="center" />
        </Datagrid>
    </List>
);

export const OwnerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
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