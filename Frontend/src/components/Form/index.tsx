//Dependencies
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

//Types and Actions
import type EmailClass from "../../models/EmailClass";
import { addEmail } from "../../store/reducers/emails";

//Styles and Components
import { Title } from "../../styles";
import * as S from "./styles";
import { BounceLoader } from "react-spinners";

const Form = () => {
  const [emailText, setEmailText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        "text/plain": [".txt"],
        "application/pdf": [".pdf"],
      },
      onDrop: (acceptedFiles) => {
        addFiles(acceptedFiles);
      },
    });

  const verifyData = (data: EmailClass[]) => {
    if (typeof data[0] !== "undefined") {
      data.forEach((email) => {
        dispatch(addEmail(email));
      });
      setSuccessMessage(true);
      setSelectedFiles([]);
      setEmailText("");
    } else {
      setErrorMessage(true);
      setSelectedFiles([]);
      setEmailText("");
      return console.error("ID is undefined");
    }
  };

  const handleAPI = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("text", emailText);
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: formData,
      });
      const data: EmailClass[] = await response.json();
      console.log("Response from API:", data);
      verifyData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEmailText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 20) {
      setEmailText(e.target.value);
    }
  };

  const RemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  const addFiles = (files: File[]) => {
    const fileArray = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);
  };

  const closeMessages = () => {
    setSuccessMessage(false);
    setErrorMessage(false);
  };

  return (
    <>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <div>
          <Title>Área de envio de emails</Title>
          <S.FormDescription>
            Copie e cole o texto do email ou anexe o arquivo(pdf ou txt)
            contendo o email
          </S.FormDescription>
          <S.TextArea onChange={(e) => handleEmailText(e)} value={emailText} />
          <div {...getRootProps()}>
            <S.FileInput
              type="file"
              multiple
              accept=".txt ,.pdf"
              id="fileInput"
              onChange={(e) => addFiles(Array.from(e.target.files || []))}
              {...getInputProps()}
            />
            <S.FileLabel
              className={
                isDragActive ? "drag-active" : isDragReject ? "drag-reject" : ""
              }
            >
              {isDragActive
                ? "Solte os arquivos aqui..."
                : isDragReject
                  ? "Arquivo inválido"
                  : "Arraste os arquivos aqui ou clique para selecionar"}
            </S.FileLabel>
          </div>
          <S.Files>
            {selectedFiles.map((file, index) => (
              <S.FileItem key={index}>
                <span>{file.name.slice(0, 60)}</span>
                <S.CloseIcon onClick={() => RemoveFile(index)}>X</S.CloseIcon>
              </S.FileItem>
            ))}
          </S.Files>
        </div>
        <S.buttonContainer>
          <S.CancelButton to="/">Voltar a página inicial</S.CancelButton>
          <S.SubmitButton onClick={handleAPI}>
            {isLoading ? "Enviando..." : "Analisar Emails"}
          </S.SubmitButton>
        </S.buttonContainer>
      </S.Form>
      <S.Modal
        className={successMessage || isLoading || errorMessage ? "visible" : ""}
      >
        {isLoading && <BounceLoader color="#4A90E2" className="spinner" />}
        {successMessage && (
          <S.ModalContent className={successMessage ? "" : "hidden"}>
            <p className="success">
              Email(s) analizado(s) e disponível(eis) na página inicial
            </p>
          </S.ModalContent>
        )}
        {errorMessage && (
          <S.ModalContent className={errorMessage ? "" : "hidden"}>
            <p className="error">
              Ocorreu um erro ao analisar o(s) email(s). Tente novamente.
            </p>
          </S.ModalContent>
        )}
        <div className="overlay" onClick={closeMessages} />
      </S.Modal>
    </>
  );
};

export default Form;
