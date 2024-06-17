// src/components/FormComponents.js
import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
`;

export const FormTitle = styled.h2`
    margin-bottom: 1.5rem;
    color: #61dafb;
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: #ffffff;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
`;

export const FormButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #61dafb;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #21a1f1;
    }
`;

export const FormError = styled.div`
    color: #e74c3c;
    margin-bottom: 1rem;
`;

export const FormSuccess = styled.div`
    color: #2ecc71;
    margin-bottom: 1rem;
`;
