


function Card({data}) {
  return (
    <div className="bg-slate-700 m-4 px-8 py-4 rounded-2xl hover:bg-slate-800">
        <img src={data.flags.png} alt="Flag" className="w-50 rounded-xl"/>
        <h1 className="text-white">Name: <span className="text-2xl font-bold text-white">{data.name.common}</span></h1>
        <h2 className="text-white">Capital: <span className="text-xl  text-white">{data.capital}</span></h2>
        <p className="text-white">Population: <span className="text-white">{data.population}</span></p> 
    </div>
  )
}

export default Card