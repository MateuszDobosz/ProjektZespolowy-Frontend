import React from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AddNewsForm from "../components/AddNewsForm";
import Wrapper from '../components/Wrapper';


const AdminPage = () => <Wrapper>
    <AddAnimalForm />
    <AddNewsForm />
</Wrapper>;

export default AdminPage;
