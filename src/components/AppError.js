export default function AppError(props) {
  return (
    <div className="error">
      Something happened: { props.error }
    </div>
  );
}
