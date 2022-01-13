import { Create, Datagrid, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from "react-admin";

export const EngineList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField textAlign="center" source="id" />
            <TextField textAlign="center" source="name" />
            <NumberField textAlign="center" source="horsepower" />
            <TextField textAlign="center" source="brand" />
            <EditButton textAlign="center" />
        </Datagrid>
    </List>
);

export const EngineEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
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