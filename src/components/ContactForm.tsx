import styled from 'styled-components';

const Wrap = styled.section`
  padding: 48px 24px;

  h2 {
    margin-bottom: 32px;
    color: #e1e1e6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 560px;
`;
const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;
const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  min-height: 120px;
`;
const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  background: #0f172a;
  color: white;
  border: none;

  &:hover {
    opacity: 0.95;
  }
`;

export default function ContactForm() {
  return (
    <Wrap id="contact">
      <h2>Contato</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button type="submit">Enviar</Button>
      </Form>
    </Wrap>
  );
}
