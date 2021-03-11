import '../css/components/Launch.css';

export default function Launch(props) {
  let links = Object.entries(props.launch.links).map(([name, url]) => {
    switch (name) {
      case 'wikipedia': return <a href={url}>WP</a>;
      case 'youtube_id': return <a href={'https://youtu.be/' + url}>YT</a>;
      default: return null
    }
  }).filter(e => e);
  if (links.length === 0) links = [<span>(none)</span>];

  return (
    <div className="launch">
      <span className="name">{props.launch.name}</span>
      <img
        className="icon"
        src={props.launch.links.patch.small}
        alt="Launch icon"
      />
      <span className="about">
        <time>
          { new Date(props.launch.date_utc).toISOString().split('T')[0] }
        </time>
        <span className="seperator">|</span>
        cores: {props.launch.cores.map(core => {
          return <span key={core.id}>
            {core.landing_success ? '✅' : '❌'}
          </span>
        })}
        <span className="seperator">|</span>
        <span className="links">links: {links}</span>
      </span>
      <span className="result">
        {props.launch.success ? '✅' : '❌'}
      </span>
    </div>
  )
}
