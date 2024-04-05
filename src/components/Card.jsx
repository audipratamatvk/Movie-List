export default function Card(props) {
  return (
    <div className="relative max-w-56 bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" style={{ width: '222.4px', height: '295.788px', objectFit: 'cover' }} src={`${props.menu.Poster}`}
        alt="" />
      <div className="p-5 flex justify-center items-center">
        <p className="mb-3 font-normal text-dark font-semibold text-center">{props.menu.Title}</p>
      </div>
    </div>
  )
}