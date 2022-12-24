interface Props {
  component: React.ReactNode;
}
const CreateSections: React.FC<Props> = ({ component }) => {
  return <div>{component}</div>;
};

export default CreateSections;
