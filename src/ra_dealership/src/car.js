import { Create, Datagrid, DeleteButton, Edit, EditButton, List, NumberField, ReferenceField, ReferenceInput, SearchInput, SelectInput, SimpleForm, TextField, TextInput } from "react-admin";
import { ColorField, ColorInput } from 'react-admin-color-input';

const postFilters = [
    <SearchInput source="name" alwaysOn />,
    <ReferenceInput source="engineId" reference="engines">
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="manufacturerId" reference="manufacturers">
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="ownerId" reference="owners">
        <SelectInput optionText="name" />
    </ReferenceInput>
];

export const CarList = props => (
    <List {...props} filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField textAlign="center" source="name" />
            <TextField textAlign="center" source="description" />
            <ColorField source="color" />
            <ReferenceField textAlign="center" source="engineId" reference="engines">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField textAlign="center" source="manufacturerId" reference="manufacturers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField textAlign="center" source="ownerId" reference="owners">
                <TextField source="name" />
            </ReferenceField>
            <EditButton textAlign="center" />
            <DeleteButton textAlign="center" />
        </Datagrid>
    </List>
);

export const CarEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ColorInput source="color" />
            <ReferenceInput source="engineId" reference="engines">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="manufacturerId" reference="manufacturers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="ownerId" reference="owners">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const CarCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ColorInput source="color" />
            <ReferenceInput source="engineId" reference="engines">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="manufacturerId" reference="manufacturers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="ownerId" reference="owners">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);