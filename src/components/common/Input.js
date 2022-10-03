import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #e4dfdf;
  border-radius: 12px;
  height: 56px;
  @media screen and (max-width: 480px) {
    height: 42px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1679px) {
    margin-bottom: 35px;
  }
`;

export const LabelText = styled.span`
  position: absolute;
  display: inline-block;
  top: -0.5rem;
  left: 0.75rem;
  padding: 0 0.25rem;
  font-size: 1rem;
  background-color: white;
`;
const ImgContainer = styled.div`
  background-color: white;
  width: 40px;
  padding: 8px 5px;
  height: 100%;
  border-radius: 12px 0 0 12px;
`;
export const Icon = styled.img``;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  font-size: 1.25rem;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  ::placeholder {
    color: #747688;
    font-size: 16px;
  }
`;

export const Post = styled.input`
  padding: 5px;
  width: 50%;
  font-size: 1.25rem;
  height: 56px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #e4dfdf;
  ::placeholder {
    color: #747688;
    font-size: 16px;
  }
`;

const StyledInput = ({ placeholder, icon, type, value, onChange, name, required }) => {
  return (
    <Container>
      {icon && (
        <ImgContainer>
          <Icon src={icon} />
        </ImgContainer>
      )}
      <Input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Container>
  );
};

export const EditInput = ({
  placeholder,
  icon,
  type,
  value = 'KIM',
  onChange,
  name,
  required,
  readOnly,
  edit,
}) => {
  return (
    <Container>
      {icon && (
        <ImgContainer>
          <Icon src={icon} />
        </ImgContainer>
      )}
      <Input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        edit={edit}
      />
    </Container>
  );
};

export const PostInput = ({
  placeholder,
  icon,
  type,
  value,
  onChange,
  name,
  required,
  readOnly,
}) => {
  return <Post type={type} required={required} placeholder={placeholder} value={value} />;
};

export default StyledInput;
