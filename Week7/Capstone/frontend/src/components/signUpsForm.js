

export default function SignUpsForm ({
    handleChange, 
    handleSubmit, 
    btnText,
    inputs: {
      name, 
      notes
    }
}) {

    return (
        <form onSubmit={handleSubmit} className="signForm">
          <p>First and Last Name:</p>
          <input 
            id="name"
            type="text" 
            value={name} 
            name="name" 
            onChange={handleChange} 
            placeholder="Name"/>
          <p>Your Traits:</p>
          <input
            id="traits"
            type="text" 
            value={notes} 
            name="notes" 
            onChange={handleChange} 
            placeholder="Traits"/>
          <br/>
          <button>{ btnText }</button>
        </form>
      )
}