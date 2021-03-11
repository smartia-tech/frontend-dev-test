export default function AppError(props) {
  return (
    <div className="app-error">
      Something happened: { props.error }
    </div>
  );
}
