export default function Launch(props) {
  return (
    <div className="launch">
      <span className="name">{props.launch.name}</span>
      <img
        className="launch-patch"
        src={props.launch.links.patch.small}
        alt="Launch icon"
        width="20"
      />
      <span className="date">
        { new Date(props.launch.date_utc).toISOString().split('T')[0] }
      </span>
      <span className="result">{props.launch.cores.landing_success}</span>
    </div>
  )
}
