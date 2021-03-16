
const Launch = ({ name, image, launchDate, cores }) => {
  return (<li>
    <div>
      <image src={image} alt="launch image" />
      <h3>{name}</h3>
    </div>
    <time/>
  </li>)
}

export default Launch;