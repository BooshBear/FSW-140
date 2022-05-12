

export default function SignUpsForm ({
    handleChange, 
    handleSubmit, 
    btnText,
    inputs: {
      name,
      notes,
      year
    }
}) {
  const ifEditing = () => {
    if (year !== "") {
      return (
        <>
          <p className="text-center">Year:</p>
          <input
          className="pl-1 border-2 border-purple-400"
          type="number" 
          value={year} 
          name="year" 
          onChange={handleChange}/>
        </>
      )
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-8 p-4 border-2 border-purple-700 rounded-md ">
      <p className="text-center">First and Last Name:</p>
        <input 
          className="pl-1 border-2 border-purple-400"
          type="text" 
          value={name} 
          name="name" 
          onChange={handleChange} 
          placeholder="Name"/>
          {ifEditing()}
        <p className="text-center">Notes:</p>
        <textarea
          className="pl-1 border-2 border-purple-400 min-w-[300px] min-h-[200px]"
          value={notes} 
          name="notes" 
          onChange={handleChange} 
          placeholder="Write notes here"/>
        <button className="ml-20 mr-20 mt-3 p-[2px] border-2 border-purple-700 rounded-xl hover:bg-purple-700 hover:text-white">{ btnText }</button>
      </form>
  )
}