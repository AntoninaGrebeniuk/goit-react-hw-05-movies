import { Form, Input, Button, BtnText } from './SearchBar.styled';

export const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} placeholder="Search movies..." />

      <Button type="submit">
        <BtnText>Search</BtnText>
      </Button>
    </Form>
  );
};
