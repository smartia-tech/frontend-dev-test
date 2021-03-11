import '../css/components/Paginate.css';
export default function Paginate(props) {
  let pages = Math.ceil(props.entries.length / props.perPage);
  let index = props.page * props.perPage;
  let entries = props.entries.slice(index, index+props.perPage);
  return (
    <div>
      <div className="pages">
        {new Array(pages).fill(0).map((_, i) => {
          return <button
            key={i}
            className="page-accessor"
            onClick={() => props.changePage(i)}
            disabled={props.page === i}
          >{i+1}</button>
        })}
      </div>
      <div className="entries">{entries}</div>
    </div>
  );
}
