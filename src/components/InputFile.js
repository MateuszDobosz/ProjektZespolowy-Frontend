import styled from "styled-components";

const InputFile = styled.input`
  width: 100px;
  height: 20px;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: "Wybierz zdjęcie";
  }
`;

export default InputFile;
